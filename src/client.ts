import { TextClient } from './client-text';

export class Client {
	public text: TextClient;
	public constructor(private token: string, private baseurl?: string) {
		this.text = new TextClient(token, baseurl);
	}
}
