/*import express from 'express';
import { celebrate, Joi } from 'celebrate';
import { SequelizeUserRepository } from './database/SequelizeUserRepository';
import { CreateUserUseCase } from '../application/usecases/CreateUsersUseCase';
import { ListUsersUseCase } from '../application/usecases/ListUsersUseCase';
import { UserController } from '../interfaces/controllers/UserController';

const router = express.Router();
const userRepository = new SequelizeUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const listUsersUseCase = new ListUsersUseCase(userRepository);
const userController = new UserController(createUserUseCase, listUsersUseCase);

router.post(
  '/createUser',
  celebrate({
    body: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    }),
  }),
  (req, res) => userController.createUser(req, res)
);

router.get('/listAllUsers', (req, res) => userController.listAllUsers(req, res));

export default router;*/


import express from 'express';
import { celebrate, Joi } from 'celebrate';
import { SequelizeUserRepository } from './database/SequelizeUserRepository';
import { CreateUserUseCase } from '../application/usecases/CreateUsersUseCase';
import { ListUsersUseCase } from '../application/usecases/ListUsersUseCase';
import { UserController } from '../interfaces/controllers/UserController';
import { asyncHandler } from '../middlewares/asyncHandler';// Importe o middleware

const router = express.Router();
const userRepository = new SequelizeUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const listUsersUseCase = new ListUsersUseCase(userRepository);
const userController = new UserController(createUserUseCase, listUsersUseCase);

router.get('/listAllUsers', asyncHandler((req, res) => userController.listAllUsers(req, res)));
router.post('/createUser', asyncHandler((req, res) => userController.createUser(req, res)));

export default router;