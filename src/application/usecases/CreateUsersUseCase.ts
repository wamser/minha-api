import { UserRepository } from "../../interfaces/repositories/UserRepository";
import { User } from "../../domain/models/User";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User): Promise<User> {
    console.error('variavel user:', user);
    return await this.userRepository.createUser(user);
  }
}