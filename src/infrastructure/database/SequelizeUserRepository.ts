import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from './sequelize-instance';  
import { UserRepository } from '../../interfaces/repositories/UserRepository';
import { User } from '../../domain/models/User';

//const sequelize = new Sequelize(process.env.DATABASE_URL as string);

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
    const createdUser = await UserModel.create({user});
    return createdUser.toJSON();
  }

  async findAllUsers(): Promise<User[]> {
    const users = await UserModel.findAll();
    return users.map(user => user.toJSON());
  }
}

UserModel.sync();