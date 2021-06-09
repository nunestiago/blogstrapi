function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject(new Error('ERRO'));
      }

      resolve(msg);
    }, tempo);
  });
}

async function executa() {
  try {
    const fase1 = esperaAi('Fase 1', rand()); //sem await
    console.log(fase1);
    setTimeout(() => {
      console.log('Promise pendente', fase1);
    }, 6000);
    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);
    const fase3 = await esperaAi('Fase 3', rand());
    console.log('Terminamos na ', fase3);
  } catch (error) {
    console.log(error);
  }
}
executa();
