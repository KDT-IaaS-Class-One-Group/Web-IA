const express = require('express');
const path = require('path');
const port = 4040;
const app = express();

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'frontEnd/index.html');
  res.sendFile(indexPath);
});

app.use(express.json());
let reData = {value: ''};

app.post('/sub', (req, res) => {
  reData = { value : req.body.value };
  const responseData = {message: 'POST 요청 성공적'}
  res.json(responseData)
})

app.get('/subData', (req, res) => {
  const jsonData = {
    property1 : '값1',
    property2 : '값2'
  }
  res.json(jsonData);
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});