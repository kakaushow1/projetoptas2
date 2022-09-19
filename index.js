const express = require('express')
const path = require('path');
const app = express();
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/formacao', (req, res) => {
  res.sendFile(path.join(__dirname, '/formacao.html'));
})

app.get('/pojetos', (req, res) => {
  res.sendFile(path.join(__dirname, '/pojetos.html'));
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

