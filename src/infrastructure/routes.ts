import express from 'express';
import { celebrate, Joi } from 'celebrate';
import { SequelizeUserRepository } from './database/SequelizeUserRepository';
import { CreateUserUseCase } from '../application/usecases/CreateUsersUseCase';
import { ListUsersUseCase } from '../application/usecases/ListUsersUseCase';
import { UserController } from '../infrastructure/controllers/UserController';
import { asyncHandler } from '../middlewares/asyncHandler';// Importe o middleware

const router = express.Router();
const userRepository = new SequelizeUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const listUsersUseCase = new ListUsersUseCase(userRepository);
const userController = new UserController(createUserUseCase, listUsersUseCase);

router.get('/listAllUsers', asyncHandler((req, res) => userController.listAllUsers(req, res)));
router.post('/createUser', asyncHandler((req, res) => userController.createUser(req, res)));

export default router;