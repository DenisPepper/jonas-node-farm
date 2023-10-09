import * as http from 'node:http';
import * as url from 'node:url';
import {
  productsJSON,
  products,
  tmpCard,
  tmpCards,
  tmpProduct,
} from './files.js';
import { replaceTemplate } from './util.js';
import slugify from 'slugify';

const slugs = products.map((item) =>
  slugify(item.productName, { lower: true })
);

const IP = '127.0.0.1';
const PORT = 8000;

const server = http.createServer((req, res) => {
  const { pathname: route, query } = url.parse(req.url, true);

  //Home page
  if (route === '/' || route === '/catalog') {
    const cardsHtml = products
      .map((product) => replaceTemplate(tmpCard, product))
      .join('');

    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end(tmpCards.replace(/{%cards%}/g, cardsHtml));

    //Product page
  } else if (route === '/product') {
    const product = products.find((item) => item.id === Number(query.id));

    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end(replaceTemplate(tmpProduct, product));

    //API
  } else if (route === '/api') {
    res.writeHead(200, {
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
