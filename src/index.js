'use strict';

const http = require('http');
const port = 8080;

http.createServer(function (req, res) {
  console.log('Received a request');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
}).listen(port);
console.log('Application listening to port %d', port);
