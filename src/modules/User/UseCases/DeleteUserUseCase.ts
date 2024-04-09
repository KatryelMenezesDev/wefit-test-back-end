import { inject, injectable } from "tsyringe";

import { InputDeleteUserDTO, OutputDeleteUserDTO } from "@modules/User/DTOs/User/DeleteUser";
import { IUserRepository } from "@modules/User/Repositories/IUserRepository";
import { BadRequestError } from "@utils/AppError";

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ id }: InputDeleteUserDTO): Promise<OutputDeleteUserDTO> {
    // Verificar se o usuário existe
    const userExists = await this.userRepository.read(id);

    if (!userExists) {
      throw new BadRequestError("User not found");
    }

    // Deletar o usuário
    await this.userRepository.delete(id);

    return { message: "User deleted successfully" };
  }
}
