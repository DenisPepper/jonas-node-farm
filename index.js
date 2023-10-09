import * as fs from 'node:fs';
import * as http from 'node:http';
import * as url from 'node:url';
import { __dirname } from './util.js';

const IP = '127.0.0.1';
const PORT = 8000;
const productsJSON = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf8');
const products = JSON.parse(productsJSON);

const server = http.createServer((req, res) => {
  const route = req.url;

  if (route === '/' || route === '/catalog') {
    res.end('Catalog page');
  } else if (route === '/product') {
    res.end('Product page');
  } else if (route === '/api') {
    res.writeHead(404, {
      'Content-type': 'application/json',
    });
    res.end(productsJSON);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'My-own-header': 'some-type',
    });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(PORT, IP, () =>
  console.log(`Server start listening requests on ${IP}:${PORT}`)
);
