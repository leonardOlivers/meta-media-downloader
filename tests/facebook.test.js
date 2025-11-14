import assert from 'assert';
import handleFacebook from '../src/processors/facebook_handler.js';

test('Facebook handler returns valid metadata array', async () => {
const url = 'https://www.facebook.com/reel/test';
const config = { retries: 1 };

const result = await handleFacebook(url, config);

assert.ok(Array.isArray(result));
assert.ok(result[0].sourceUrl === url);
});