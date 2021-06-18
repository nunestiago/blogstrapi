/* eslint-disable no-undef */
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

route.get('/contato', contatoController.paginaInicial);
route.get('/testes/:idUser?', (req, res) => {
  //a interrogação deixa opcional o param
  console.log(req.params); //o que tiver no idUser ex {'idUsuarios': '123'} sempre vem JSON
  res.send(console.log('OI'));
});

module.exports = route;
