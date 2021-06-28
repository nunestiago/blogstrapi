import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              arg: [3, 255],
              msg: 'O nome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              arg: [3, 255],
              msg: 'O sobrenome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'E-mail inválido',
            },
          },
        },
        idade: {
          type: Sequelize.INTERGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Idade precisa ser um número inteiro',
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Peso precisa ser inteiro ou de ponto flutuante',
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Altura precisa ser inteiro ou de ponto flutuante',
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }
}
