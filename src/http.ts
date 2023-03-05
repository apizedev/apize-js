import fetch, { Response } from 'node-fetch';

let prodBaseUrl = 'https://api.apize.dev';

export function setBaseUrl(baseurl: string): void {
	prodBaseUrl = baseurl;
}

export function buildUrl(baseurl: string | undefined, path: string): string {
	return `${baseurl ?? prodBaseUrl}${path}`;
}

export async function get<T>(url: string, token?: string): Promise<T> {
	// Declare the headers to send
	const headers: { [key: string]: string } = {};
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	// Send the request and parse it as JSON
	return handleApiFetch<T>(
		fetch(url, {
			method: 'GET',
			headers,
		})
	);
}

export async function post<T>(
	url: string,
	token?: string,
	body?: any
): Promise<T> {
	// Declare the headers to send
	const headers: { [key: string]: string } = {
		'Content-Type': 'application/json',
	};
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	// Send the request and parse it as JSON
	return handleApiFetch<T>(
		fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
		})
	);
}

async function handleApiFetch<T>(fetchRes: Promise<Response>): Promise<T> {
	const res = await fetchRes.then((r) => r.json());
	if (!res || typeof res !== 'object')
		throw new Error('malformed api response');
	const response: RawResponse<T> = res as any;
	if ('error' in response) throw new Error(response.error.message);
	if (!('data' in response))
		throw new Error('malformed api reponse, missing `data` field');
	return response.data;
}

type RawResponse<T> = { error: ApiError } | { data: T };

interface ApiError {
	code: string;
	message: string;
	docs_url: string;
}
