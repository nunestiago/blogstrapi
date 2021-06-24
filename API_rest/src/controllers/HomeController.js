import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Tais',
      sobrenome: 'Azevedo',
      email: 'teste2@gmail.com',
      idade: 19,
      peso: 99,
      altura: 1.6,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
