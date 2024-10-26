import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../application/usecases/CreateUsersUseCase';
import { ListUsersUseCase } from '../../application/usecases/ListUsersUseCase';

export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private listUsersUseCase: ListUsersUseCase
  ) {}

  async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      console.error('variavel name:', name);
      console.error('variavel email:', email);
      const user = await this.createUserUseCase.execute({ name, email });
      return res.status(201).json(user);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  async listAllUsers(req: Request, res: Response) {
    try {
      const users = await this.listUsersUseCase.execute();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar usuários' });
    }
  }
}