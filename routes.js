// 이걸 만들 때 라우터가 뭔지 몰랐던 시점
// 라우터 경로 설정
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