import assert from 'assert';
import handleInstagram from '../src/processors/instagram_handler.js';

test('Instagram handler returns valid metadata array', async () => {
const url = 'https://www.instagram.com/reel/test';
const config = { retries: 1 };

const result = await handleInstagram(url, config);

assert.ok(Array.isArray(result));
assert.ok(result[0].sourceUrl === url);
});