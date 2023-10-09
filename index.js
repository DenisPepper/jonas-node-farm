import * as http from 'node:http';
import * as url from 'node:url';
import {
  productsJSON,
  products,
  tmpCard,
  tmpCards,
  tmpProduct,
} from './files.js';

const IP = '127.0.0.1';
const PORT = 8000;

const replaceTemplate = (tmpCard, product) => {
  return tmpCard
    .replace(/{%productName%}/g, product.productName)
    .replace(/{%image%}/g, product.image)
    .replace(/{%quantity%}/g, product.quantity)
    .replace(/{%from%}/g, product.from)
    .replace(/{%nutrients%}/g, product.nutrients)
    .replace(/{%organic%}/g, (str) => (product.organic ? '' : 'not-organic'))
    .replace(/{%description%}/g, product.description)
    .replace(/{%price%}/g, product.price)
    .replace(/{%id%}/g, product.id);
};

const server = http.createServer((req, res) => {
  const route = req.url;

  //Home page
  if (route === '/' || route === '/catalog') {
    const cardsHtml = products.map((product) =>
      replaceTemplate(tmpCard, product)
    );
    console.log(cardsHtml);
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end(tmpCards);

    //Product page
  } else if (route === '/product') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end(tmpProduct);

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
