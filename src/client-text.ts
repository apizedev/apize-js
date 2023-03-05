import { buildUrl, post } from './http';

export class TextClient {
	public constructor(private token: string, private baseurl?: string) {}

	public measure(req: MeasureRequest): Promise<MeasureResponse> {
		return post<MeasureResponse>(
			buildUrl(this.baseurl, '/solutions/text/v1/measure'),
			this.token,
			req
		);
	}

	public summarize(req: SummarizeRequest): Promise<SummarizeResponse> {
		return post<SummarizeResponse>(
			buildUrl(this.baseurl, '/solutions/text/v1/summarize'),
			this.token,
			req
		);
	}
}

export interface MeasureRequest {
	text: string;
}

export interface MeasureResponse {
	words: number;
}

export interface SummarizeRequest {
	text: string;
	sentences?: string;
}

export interface SummarizeResponse {
	summary: string;
}
