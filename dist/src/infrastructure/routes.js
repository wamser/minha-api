"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SequelizeUserRepository_1 = require("./database/SequelizeUserRepository");
const CreateUsersUseCase_1 = require("../application/usecases/CreateUsersUseCase");
const ListUsersUseCase_1 = require("../application/usecases/ListUsersUseCase");
const UserController_1 = require("../infrastructure/controllers/UserController");
const asyncHandler_1 = require("../middlewares/asyncHandler"); // Importe o middleware
const router = express_1.default.Router();
const userRepository = new SequelizeUserRepository_1.SequelizeUserRepository();
const createUserUseCase = new CreateUsersUseCase_1.CreateUserUseCase(userRepository);
const listUsersUseCase = new ListUsersUseCase_1.ListUsersUseCase(userRepository);
const userController = new UserController_1.UserController(createUserUseCase, listUsersUseCase);
router.get('/listAllUsers', (0, asyncHandler_1.asyncHandler)((req, res) => userController.listAllUsers(req, res)));
router.post('/createUser', (0, asyncHandler_1.asyncHandler)((req, res) => userController.createUser(req, res)));
exports.default = router;
