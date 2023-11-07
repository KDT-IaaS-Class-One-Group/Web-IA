const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 4040;
const app = express();
const router = express.Router();
const fs = require('fs');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd/index.html'));
});

app.get('/data', (req, res) => {
  // 데이터 조회 로직을 작성
  res.json({ message: 'GET 요청에 대한 응답' });
});

// POST 요청 처리
app.post('/data', (req, res) => {
  // POST 요청으로 받은 데이터 처리
  const requestData = req.body;
  // 여기에서 데이터를 저장하거나 다룰 수 있음
  res.json({ message: 'POST 요청에 대한 응답', data: requestData });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
