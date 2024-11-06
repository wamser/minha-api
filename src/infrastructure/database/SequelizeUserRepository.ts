import { Sequelize } from 'sequelize';
import { UserModel, initUserModel } from './models/UserModel';
import { UserRepository } from '../../application/interfaces/repositories/UserRepository';
import 'dotenv/config';

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  logging: false,
});

initUserModel(sequelize);

export class SequelizeUserRepository implements UserRepository {
  async createUser(user: { name: string; email: string }) {
    const createdUser = await UserModel.create(user);
    return createdUser;
  }

  async listAllUsers() {
    return await UserModel.findAll();
  }

  async findAllUsers() {
    return await UserModel.findAll();
  }

  async deleteUser(id: number): Promise<boolean> {
    const result = await UserModel.destroy({
      where: { id }
    });

    return result > 0; // Retorna true se algum registro foi deletado
  }

}