/* eslint-disable no-undef */
const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.urlencoded({ extended: true })); //instrução para o express pegar o req body
app.use(routes);

//CRUD => CREATE, READ, UPDATE, DELETE

app.listen(3000, () => console.log('Servidor na porta 3000'));
