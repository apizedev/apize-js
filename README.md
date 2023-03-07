# apize-js

The official [Apize](https://apize.dev) SDK for NodeJS, for adding AI-powered intelligence to your apps.

## Overview

This package provides access to the [Apize APIs](https://docs.apize.dev) in a NodeJS environment, handling authentication and the processing of API requests.

## Summarization example

```js
const { Client } = require('apize');

// Create an Apize client with your API token
const apize = new Client('token');

// Summarize some text
const { summary } = await apize.text.summarize({
	text: 'The quick brown fox jumped over the lazy dog',
});
console.log('Summary: ', summary);
```

## Resources

-   Read our [Quickstart guide here](https://docs.apize.dev/quickstart)
-   Read the [API docs here](https://docs.apize.dev/text-intelligence)
-   Setup your [API tokens here](https://apize.dev/tokens)
