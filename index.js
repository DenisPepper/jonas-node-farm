import * as http from 'node:http';

const IP = '127.0.0.1';
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.end('Hello from server!');
});

server.listen(PORT, IP, () =>
  console.log(`Server start listening requests on ${IP}:${PORT}`)
);
