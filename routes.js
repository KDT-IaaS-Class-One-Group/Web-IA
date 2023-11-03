const http = require('http');
const querystring = require('querystring');

http.createServer((req,res) => {
  if (req.method === 'POST' && req.url === '/post') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.tostring()
    });
    req.on('end', () => {
      const parseBody = querystring.parse(body)
    })
  }
})