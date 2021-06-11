const nome = 'Tiago';
const sobrenome = 'Nunes';
const falaNome = () => console.log(nome, sobrenome);

// console.log(module);

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// console.log(module.exports);

exports.nome = nome;
this.qualquerCoisa = 'O que eu quiser exportar';
// console.log(module.exports); //{ nome: 'Tiago', qualquerCoisa: 'O que eu quiser exportar' }
