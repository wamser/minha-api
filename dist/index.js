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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
const celebrate_1 = require("celebrate");
require("dotenv/config");
const app = (0, express_1.default)();
const port = 3000;
// Conectando ao banco de dados
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL);
const User = sequelize.define('User', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
});
// Sincronizando o modelo com o banco de dados
User.sync();
// Middleware para parsear o corpo das requisições
app.use(express_1.default.json());
app.post('/createUser', (0, celebrate_1.celebrate)({
    body: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().required()
    })
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const user = yield User.create({ name, email });
        res.status(201).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Erro ao criar usuário'
        });
    }
}));
app.get('/listAllUsers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.findAll();
        res.json(users);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
}));
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
