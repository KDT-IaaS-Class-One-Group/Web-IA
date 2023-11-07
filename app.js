const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 4040;
const app = express();
const router = express.Router();
const fs = require('fs');

app.use(bodyParser.json());
// 정적 미들웨어 작성
app.use(express.static(path.join(__dirname, 'public')));

// app.get으로 / 맨 처음 경로를 설정해야 서버 생성이 가능
// 그렇지 않을 경우 cannot GET / 문구 발생
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/subData', (req, res) => {
  // 데이터 조회 로직을 작성
  res.json({ message: 'GET 요청에 대한 응답' });
});

// POST 요청 처리
// app.post('', () => ) 앞쪽 경로가 매우 중요하다.
// 
app.post('/sub', (req, res) => {
  // 선언명 body에 요청
  const requestData = req.body;
  console.log('POST 요청 데이터:', requestData);

  // JSON 파일명을 현재 시간을 기반으로 생성 (예: 2023-11-07-12-34-56.json)
//  const timestamp = new Date().toISOString().replace(/[-:]/g, '');
let counter = 1;
    function fileName() {
      const DataName = `index${counter}.json`
      counter++;
      return DataName;
    }

    const jsonFileName = fileName();
    

  // JSON 파일을 생성하고 데이터를 저장
  // JSON.stringify()메서드 JavaScript 값이나 객체를 JSON 문자열로 변환
  fs.writeFile(jsonFileName, JSON.stringify(requestData, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).send('파일을 생성하거나 저장할 수 없습니다.'); // 오류 응답
    } else {
      res.json({ message: 'POST 요청에 대한 응답', savedData: requestData });
    }
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
