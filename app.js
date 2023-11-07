const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 4040;
const app = express();
const router = express.Router();

// index.html 파일이 있는 디렉토리 경로
const staticFilePath = path.join(__dirname, 'frontEnd');

// 정적 파일을 서빙하는 미들웨어를 추가
app.use(express.static(staticFilePath));

app.get('/', (req, res) => {
  res.sendFile(path.join(staticFilePath, 'index.html'));
});

app.use(bodyParser.json());
let reData = {value: ''};

app.post('/sub', (req, res) => {
  reData = { value : req.body.value };
  const responseData = {message: 'POST 요청 성공적'}
  res.json(responseData)
});

app.get('/subData', (req, res) => {
  res.json(reData);
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});