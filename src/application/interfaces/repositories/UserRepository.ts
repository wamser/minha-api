import { User } from "../../domain/models/User";

export interface UserRepository {
  createUser(user: User): Promise<User>;
  findAllUsers(): Promise<User[]>;
  deleteUser(id: number): Promise<boolean>;
}