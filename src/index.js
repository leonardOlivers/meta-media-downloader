import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import handleFacebook from './processors/facebook_handler.js';
import handleInstagram from './processors/instagram_handler.js';
import parseUrl from './utils/parser.js';
import defaultConfig from './config/defaults.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
try {
const inputPath = path.join(__dirname, '../data/sample_input.json');
const urls = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

const results = [];

for (const url of urls) {
const type = parseUrl(url);

if (type === 'facebook') {
results.push(...await handleFacebook(url, defaultConfig));
} else if (type === 'instagram') {
results.push(...await handleInstagram(url, defaultConfig));
} else {
console.warn(`Unknown URL type: ${url}`);
}
}

const outputPath = path.join(__dirname, '../data/example_output.json');
fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

console.log('Processing complete. Output saved to data/example_output.json');
} catch (err) {
console.error('Fatal error:', err);
}
}

main();