exports.paginaInicial = (req, res) => {
  res.send(
    `<form action="/" method="POST">
     Nome: <input type="text" name="nome"/>
     Outro Input<input type="text" name="teste"/>
     <button>Enviar</button>
     </form> `
  );
};

exports.trataPost = (req, res) => {
  console.log(req.body); //usei o urlencoded (linha 5) para poder pegar os dados enviados pelo input
  res.send('Recebi o formulário');
};
