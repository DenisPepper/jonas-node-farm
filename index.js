import * as fs from 'node:fs';
import * as http from 'node:http';
import * as url from 'node:url';
import { __dirname } from './util.js';
import {
  productsJSON,
  products,
  tmpCard,
  tmpCards,
  tmpProduct,
} from './files.js';

const IP = '127.0.0.1';
const PORT = 8000;

const server = http.createServer((req, res) => {
  const route = req.url;

  //Home page
  if (route === '/' || route === '/catalog') {
    res.end('Catalog page');

    //Product page
  } else if (route === '/product') {
    res.end('Product page');

    //API
  } else if (route === '/api') {
    res.writeHead(404, {
      'Content-type': 'application/json',
    });
    res.end(productsJSON);

    //Not found page
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
