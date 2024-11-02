"use strict";
/*import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from './sequelize-instance';
import { UserRepository } from '../../application/interfaces/repositories/UserRepository';
import { User } from '../../application/domain/models/User';

const UserModel = sequelize.define<any,any>('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

export class SequelizeUserRepository implements UserRepository {
  async createUser(user: User): Promise<User> {
    const createdUser = await UserModel.create(name: user.name, email: user.email)  //({user});
    return createdUser.toJSON();
  }

  async findAllUsers(): Promise<User[]> {
    const users = await UserModel.findAll();
    return users.map(user => user.toJSON());
  }
}

UserModel.sync();*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeUserRepository = void 0;
/*import { User } from '../../application/domain/models/User';//import { User } from '../../domain/models/User';

export class SequelizeUserRepository implements UserRepository {
  async createUser(user: User): Promise<User> {
    const createdUser = await UserModel.create({ name: user.name, email: user.email });
    return new User(createdUser.toJSON());
  }

  async findAllUsers(): Promise<User[]> {
    const users = await UserModel.findAll();
    return users.map(user => new User(user.toJSON()));
  }
}*/
const sequelize_1 = require("sequelize");
const UserModel_1 = require("./models/UserModel");
require("dotenv/config");
// Inicialize a conexão com o Sequelize
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});
// Inicialize o UserModel
(0, UserModel_1.initUserModel)(sequelize);
class SequelizeUserRepository {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdUser = yield UserModel_1.UserModel.create(user);
            return createdUser;
        });
    }
    listAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserModel_1.UserModel.findAll();
        });
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserModel_1.UserModel.findAll();
        });
    }
}
exports.SequelizeUserRepository = SequelizeUserRepository;
