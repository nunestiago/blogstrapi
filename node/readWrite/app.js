const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [{ nome: 'João' }];
const json = JSON.stringify(pessoas, null, 2);
escrever(caminhoArquivo, json);

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  renderiza(dados);
}

function renderiza(dados) {
  dados = JSON.parse(dados);
  dados.forEach((val) => console.log(val));
}
lerArquivo(caminhoArquivo);
