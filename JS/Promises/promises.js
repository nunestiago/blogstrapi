function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(new Error('ERRO'));
    }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}
esperaAi('Olá1', random(1, 3))
  .then((msg) => {
    console.log(msg);
    return esperaAi('Olá2', random(1, 3));
  })
  .then((msg) => console.log(msg));

const promises = [
  'Promeiro valor',
  esperaAi('Promise 1 ', 3000),
  esperaAi('Promise 2 ', 500),
  esperaAi('Promise 3 ', 3100),
];
Promise.all(promises) //devolve tudo, se tiver certo (ou fica no erro)
  .then((valor) => console.log(valor))
  .catch((err) => console.log(err));

Promise.race(promises) //devolve só a primeira que resolver
  .then((valor) => console.log(valor))
  .catch((err) => console.log(err));
web;
