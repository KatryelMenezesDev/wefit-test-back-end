import { inject, injectable } from "tsyringe";

import { InputReadUserDTO, OutputReadUserDTO } from "@modules/User/DTOs/User/ReadUser";
import { IUserRepository } from "@modules/User/Repositories/IUserRepository";
import { BadRequestError } from "@utils/AppError";

@injectable()
export class ReadUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ id }: InputReadUserDTO): Promise<OutputReadUserDTO> {
    // Verificar se o usuário existe
    const user = await this.userRepository.read(id);

    // Se o usuário não existir, lançar um erro
    if (!user) {
      throw new BadRequestError("User not found!");
    }

    return user;
  }
}
