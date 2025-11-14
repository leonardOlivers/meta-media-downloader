import axios from 'axios';
import saveFile from '../utils/storage.js';
import retryRequest from '../utils/request_retry.js';

export default async function downloadMedia(url, filename, config) {
try {
const response = await retryRequest(() => axios.get(url, { responseType: 'arraybuffer' }), config.retries);

const filePath = saveFile(filename, response.data);

return filePath;
} catch (err) {
console.error(`Media download failed: ${url}`, err);
throw err;
}
}