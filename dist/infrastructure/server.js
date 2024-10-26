"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const celebrate_1 = require("celebrate");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((0, celebrate_1.errors)());
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});