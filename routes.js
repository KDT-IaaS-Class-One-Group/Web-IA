const http = require('http');

http.createServer((req,res) => {
  if (req.method === 'POST' && req.url === '/post') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.tostring()
    });
  }
})