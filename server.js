const express = require('express');
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.post('/', function (req, res) {
  res.send('Post request was sent');
})

app.listen(3000, function () {
  console.log('Listening on 3000');
})