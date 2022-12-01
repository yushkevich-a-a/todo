const express = require('express');
const app = express()
const port = process.env.PORT || 3001;
const initialData = require('./database/initial');

app.use('/static', express.static(__dirname + '/public'));

// Получение начальных данных

app.get('/api/progects', (req, res) => {
  res.send(initialData);
});

app.post('/api/progects', (req, res) => {
  console.log(req)
  res.send(initialData);
});

app.put('/api/progect/:id', (req, res) => {
  res.send(initialData);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

