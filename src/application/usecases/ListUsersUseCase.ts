import { UserRepository } from "../interfaces/repositories/UserRepository";

export class ListUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    return await this.userRepository.findAllUsers();
  }
}