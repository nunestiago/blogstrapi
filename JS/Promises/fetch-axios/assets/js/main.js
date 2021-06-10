// fetch('pessoas.json')
//   .then((response) => response.json())
//   .then((json) => {
//     carregaElementosNaPagina(json);
//   });

//não existe const axios require pq não é node

// eslint-disable-next-line no-undef
axios('pessoas.json').then((response) =>
  carregaElementosNaPagina(response.data)
);

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');
  for (const pessoa of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    table.appendChild(tr);
  }
  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
