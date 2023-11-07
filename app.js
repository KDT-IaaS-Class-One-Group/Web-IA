const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 4040;
const app = express();
const router = express.Router();
const fs = require('fs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/subData', (req, res) => {
  // 데이터 조회 로직을 작성
  res.json({ message: 'GET 요청에 대한 응답' });
});

// POST 요청 처리
app.post('/sub', (req, res) => {
  const requestData = req.body;
  // requestData 객체에는 클라이언트가 POST 요청으로 보낸 JSON 데이터가 들어 있습니다
  console.log('POST 요청 데이터:', requestData);

  // 여기에서 requestData를 원하는 방식으로 처리할 수 있습니다.

  // JSON 형식의 응답을 반환합니다
  res.json({ message: 'POST 요청에 대한 응답', receivedData: requestData });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
