"use strict";
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
const sequelize_1 = require("sequelize");
const UserModel_1 = require("./models/UserModel");
require("dotenv/config");
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});
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
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield UserModel_1.UserModel.destroy({
                where: { id }
            });
            return result > 0; // Retorna true se algum registro foi deletado
        });
    }
}
exports.SequelizeUserRepository = SequelizeUserRepository;
