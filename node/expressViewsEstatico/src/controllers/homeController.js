exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.trataPost = (req, res) => {
  console.log(req.body); //usei o urlencoded (linha 5) para poder pegar os dados enviados pelo input
  res.send('Recebi o formulário');
};
