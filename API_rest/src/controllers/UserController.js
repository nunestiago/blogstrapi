import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);
      return res.json(user);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ error: 'ID não encontrado' });

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
      }
      const newData = user.update(req.body);
      return res.json(newData);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ error: 'ID não encontrado' });

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
      }
      await user.destroy();
      return res.json({ deleted: user });
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
