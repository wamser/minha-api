import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../application/usecases/CreateUsersUseCase';
import { ListUsersUseCase } from '../../application/usecases/ListUsersUseCase';
import { UserRepository } from '../../application/interfaces/repositories/UserRepository';

export class UserController {
  private userRepository!: UserRepository; 
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private listUsersUseCase: ListUsersUseCase,
    userRepository: UserRepository
  ) {
    this.userRepository = userRepository;
  }

  async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const user = await this.createUserUseCase.execute({ name, email });
      return res.status(201).json(user);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
        const deleted = await this.userRepository.deleteUser(Number(id));
        if (deleted) {
            return res.status(200).json({ message: 'Usuário deletado com sucesso.' });
        } else {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        return res.status(500).json({ message: 'Failed to delete user.', error });
    }
}


  async listAllUsers(req: Request, res: Response) {
    try {
      const users = await this.listUsersUseCase.execute();
      return res.status(200).json(users);
    } catch (error) {
      console.error('Erro ao listar usuário:', error);
      return res.status(500).json({ error: 'Erro ao listar usuários' });
    }
  }
}