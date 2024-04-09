import { inject, injectable } from "tsyringe";

import { InputUpdateUserDTO, OutputUpdateUserDTO } from "@modules/User/DTOs/User/UpdateUser";
import { IUserRepository } from "@modules/User/Repositories/IUserRepository";
import { BadRequestError } from "@utils/AppError";

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    id,
    name,
    cnpj,
    cpf,
    email,
    cel,
    tel,
    cep,
    street,
    number,
    city,
    district,
    state
  }: InputUpdateUserDTO): Promise<OutputUpdateUserDTO> {
    // Verificar se o usuário existe

    const userExists = await this.userRepository.read(id);

    if (!userExists) {
      throw new BadRequestError("User not found");
    }

    // Verificar se o CPF, CNPJ, E-mail, Celular e Telefone já estão cadastrados
    const [cpfExists, cnpjExists, emailExists, celExists, telExists] = await Promise.all([
      cnpj ? this.userRepository.findByCnpj(cpf) : Promise.resolve(null),
      cnpj ? this.userRepository.findByCnpj(cnpj) : Promise.resolve(null),
      cnpj ? this.userRepository.findByCnpj(email) : Promise.resolve(null),
      cnpj ? this.userRepository.findByCnpj(cel) : Promise.resolve(null),
      cnpj ? this.userRepository.findByCnpj(tel) : Promise.resolve(null)
    ]);

    // Se já existir um usuário com o CPF, CNPJ, E-mail, Celular ou Telefone, lançar um erro
    if (cpfExists) {
      throw new BadRequestError("CPF aready exists!");
    }

    if (cnpjExists) {
      throw new BadRequestError("CNPJ aready exists!");
    }

    if (emailExists) {
      throw new BadRequestError("E-mail aready exists!");
    }

    if (celExists) {
      throw new BadRequestError("Celular aready exists!");
    }

    if (telExists) {
      throw new BadRequestError("Telefone aready exists!");
    }

    // Atualizar o usuário
    const user = await this.userRepository.update({
      id,
      name,
      cnpj,
      cpf,
      email,
      cel,
      tel,
      cep,
      street,
      number,
      city,
      district,
      state
    });

    if (!user) {
      throw new BadRequestError("User not found");
    }

    return user;
  }
}
