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

	public sentiment(req: SentimentRequest): Promise<SentimentResponse> {
		return post<SentimentResponse>(
			buildUrl(this.baseurl, '/solutions/text/v1/sentiment'),
			this.token,
			req
		);
	}

	public contentMatching(
		req: ContentMatchingRequest
	): Promise<ContentMatchingResponse> {
		return post<ContentMatchingResponse>(
			buildUrl(this.baseurl, '/solutions/text/v1/content-matching'),
			this.token,
			req
		);
	}

	public grammar(req: GrammarRequest): Promise<GrammarResponse> {
		return post<GrammarResponse>(
			buildUrl(this.baseurl, '/solutions/text/v1/grammar'),
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

export interface SentimentRequest {
	text: string;
}

export interface SentimentResponse {
	sentiment: string;
}

export interface ContentMatchingRequest {
	text: string;
	categories: string[];
}

export interface ContentMatchingResponse {
	categories: { [key: string]: number };
}

export interface GrammarRequest {
	text: string;
	explain: boolean;
}

export interface GrammarResponse {
	sentiment: string;
	explanation: string | null;
}
