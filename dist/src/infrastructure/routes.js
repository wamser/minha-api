"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SequelizeUserRepository_1 = require("./database/SequelizeUserRepository");
const CreateUsersUseCase_1 = require("../application/usecases/CreateUsersUseCase");
const ListUsersUseCase_1 = require("../application/usecases/ListUsersUseCase");
const UserController_1 = require("../interfaces/controllers/UserController");
const asyncHandler_1 = require("./path/to/asyncHandler"); // Importe o middleware
const router = express_1.default.Router();
const userRepository = new SequelizeUserRepository_1.SequelizeUserRepository();
const createUserUseCase = new CreateUsersUseCase_1.CreateUserUseCase(userRepository);
const listUsersUseCase = new ListUsersUseCase_1.ListUsersUseCase(userRepository);
const userController = new UserController_1.UserController(createUserUseCase, listUsersUseCase);
router.get('/listAllUsers', (0, asyncHandler_1.asyncHandler)((req, res, next) => userController.listAllUsers(req, res, next)));
exports.default = router;
