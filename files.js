import * as fs from 'node:fs';

/* синхронный способ работы с файловой сиситемой
const file = fs.readFileSync('./txt/input.txt', 'utf-8');
const content = `About avocado: ${file}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', content);
*/

const file = fs.readFile('./txt/input.txt', 'utf-8', (error, data) => {
  if (error) return console.log('Error 🐸');

  const content = `About avocado: ${data}.\nCreated on ${Date.now()}\nAsync`;
  fs.writeFile('./txt/output.txt', content, 'utf-8', (error) =>
    console.log('file was write!')
  );
});
