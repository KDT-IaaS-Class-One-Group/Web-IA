const express = require('express');
const path = require('path');
const { listenerCount } = require('process');
const port = 4040;
const app = express();

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'frontEnd/index.html');
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});