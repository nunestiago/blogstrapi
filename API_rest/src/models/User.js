import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 100],
              msg: 'Campo nome tem que ter entre 3 e 100 caracteres.',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: { msg: 'E-mail já existe' },
          validate: {
            isEmail: {
              msg: 'E-mail inválido.',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'Campo senha tem que ter entre 6 e 50 caracteres.',
            },
          },
        },
      },
      { sequelize }
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
