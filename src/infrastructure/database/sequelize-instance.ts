import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL || '', {
    dialect: 'postgres',  // Substitua pelo dialeto que você está usando
    logging: false,       // Opcional, para desativar logs do Sequelize no console
  });

