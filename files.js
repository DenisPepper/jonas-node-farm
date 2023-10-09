import * as fs from 'node:fs';
import { __dirname } from './util.js';

/* синхронный способ работы с файловой сиситемой
const file = fs.readFileSync('./txt/input.txt', 'utf-8');
const content = `About avocado: ${file}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', content);
*/

/*асинхронный способ работы с файловой системой
const file = fs.readFile('./txt/input.txt', 'utf-8', (error, data) => {
  if (error) return console.log('Error 🐸');

  const content = `About avocado: ${data}.\nCreated on ${Date.now()}\nAsync`;
  fs.writeFile('./txt/output.txt', content, 'utf-8', (error) =>
    console.log('file was write!')
  );
});
*/
export const productsJSON = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf8');

export const products = JSON.parse(productsJSON);

export const tmpCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf8');

export const tmpCards = fs.readFileSync(`${__dirname}/templates/template-cards.html`, 'utf8');

export const tmpProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf8');
