const { Client } = require('../dist');

(async () => {
	const apize = new Client('...');
	const { words } = await apize.text.measure({
		text: 'The quick brown fox jumped over the lazy dog',
	});
	console.log('Words: ', words);
})();
