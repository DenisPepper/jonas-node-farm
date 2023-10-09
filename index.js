import * as fs from 'node:fs';

const file = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(file)
