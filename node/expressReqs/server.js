/* eslint-disable no-undef */
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true })); //instrução para o express pegar o req body

//CRUD => CREATE, READ, UPDATE, DELETE

app.get('/', (req, res) => {
  res.send(
    `<form action="/" method="POST">
     Nome: <input type="text" name="nome"/>
     <button>Enviar</button>
     </form> `
  );
});

app.get('/testes/:idUser?', (req, res) => {
  //a interrogação deixa opcional o param
  console.log(req.params); //o que tiver no idUser ex {'idUsuarios': '123'} sempre vem JSON
  res.send(console.log('OI'));
});

app.post('/', (req, res) => {
  console.log(req.body); //usei o urlencoded (linha 5) para poder pegar os dados enviados pelo input
  res.send('Recebi o formulário');
});

app.listen(3000, () => console.log('Servidor na porta 3000'));
