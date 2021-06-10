fetch('pagina1.html')
  .then((response) => {
    if (response.status !== 200) throw new Error('MY 404');
    return response.text();
  })
  .then()
  .catch((err) => console.error(err));

document.addEventListener('click', (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);

    if (response.status !== 200) throw new Error('MY 404');

    const html = await response.text();
    carregaResultado(html);
  } catch (error) {
    console.log(error);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
