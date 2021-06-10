// import { nome as nome2, sobrenome, idade, sum, Pessoa } from './modulo1';
// const nome = 'João';
// const p1 = new Pessoa('Não', 'Pessoa');

// console.log(nome, nome2, sobrenome, idade);
// console.log(sum(5, 5));
// console.log(p1);

// import * as MeuModulo from './modulo1';

// console.log(MeuModulo);
// console.log(MeuModulo.nome);

import qualquerCoisa from './modulo1'; //uso do export default, só pode ter um por módulo

console.log(qualquerCoisa(5, 5));
