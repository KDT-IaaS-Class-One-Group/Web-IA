const express = require('express');
const path = require('path')
const port = 4040;
const app = express();

app.get((req, res) => {
  const indexPath = path.join(__dirname, 'frontEnd/index.html');
  res.sendFile(indexPath);
});

