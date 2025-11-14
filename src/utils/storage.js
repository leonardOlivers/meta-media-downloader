import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function saveFile(filename, buffer) {
const storageDir = path.join(__dirname, '../../data/downloads');
if (!fs.existsSync(storageDir)) fs.mkdirSync(storageDir, { recursive: true });

const filePath = path.join(storageDir, filename);
fs.writeFileSync(filePath, buffer);

return filePath;
}