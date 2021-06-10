const nome = 'Tiago';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);
//npx babel main.js -o bundle.js --presets=@babel/env
//verificar package.json, fiz um script pra rodar babel com watch
