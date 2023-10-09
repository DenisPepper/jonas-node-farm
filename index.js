import * as http from 'node:http';
import * as url from 'node:url';

const IP = '127.0.0.1';
const PORT = 8000;

const server = http.createServer((req, res) => {
  const route = req.url;

  if (route === '/' || route === '/catalog') {
    res.end('Catalog page');
  } else if (route === '/product') {
    res.end('Product page');
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(PORT, IP, () =>
  console.log(`Server start listening requests on ${IP}:${PORT}`)
);
