import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveria existir ou só admin
router.get('/', userController.index); // lista todos os usuários
router.get('/:id', userController.show); // lista usuário

router.post('/', userController.store);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.update);

export default router;
