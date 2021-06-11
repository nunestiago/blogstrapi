/* eslint-disable no-undef */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(
    `<form action="/" method="POST">
     Nome: <input type="text" name="nome"/>
     <button>Enviar</button>
     </form> `
  );
});
app.post('/', (req, res) => {
  res.send('Recebi o formulário');
});

app.listen(3000, () => console.log('Servidor na porta 3000'));
