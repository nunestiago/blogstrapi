export const nome = 'Tiago';
export const sobrenome = 'Nunes';
export const idade = 30;
export default function sum(x, y) {
  return x + y;
}
export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
const cpf = '123'; //não exporta
// export { nome, sobrenome as sobrenome2, idade, sum };
// export {nome as default}
