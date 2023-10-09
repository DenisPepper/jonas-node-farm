import * as fs from 'node:fs';

const file = fs.readFileSync('./txt/input.txt', 'utf-8');
const content = `About avocado: ${file}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', content);
