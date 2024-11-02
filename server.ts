import express from 'express';
import routes from './infrastructure/routes';
import { errors } from 'celebrate';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});