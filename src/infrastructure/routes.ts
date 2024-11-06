import express from 'express';
import { SequelizeUserRepository } from './database/SequelizeUserRepository';
import { CreateUserUseCase } from '../application/usecases/CreateUsersUseCase';
import { ListUsersUseCase } from '../application/usecases/ListUsersUseCase';
import { UserController } from '../infrastructure/controllers/UserController';
import { asyncHandler } from '../middlewares/asyncHandler';

const router = express.Router();
const sequelizeUserRepository = new SequelizeUserRepository();
const createUserUseCase = new CreateUserUseCase(sequelizeUserRepository);
const listUsersUseCase = new ListUsersUseCase(sequelizeUserRepository);
const userController = new UserController(createUserUseCase, listUsersUseCase,sequelizeUserRepository);

router.get('/listAllUsers', asyncHandler((req, res) => userController.listAllUsers(req, res)));
router.post('/createUser', asyncHandler((req, res) => userController.createUser(req, res)));
router.delete('/deleteUser/:id', asyncHandler((req, res) => userController.deleteUser(req, res)));

export default router;