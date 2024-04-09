import { inject, injectable } from "tsyringe";

import { InputCreateUserDTO, OutputCreateUserDTO } from "@modules/User/DTOs/User/CreateUser";
import { IUserRepository } from "@modules/User/Repositories/IUserRepository";
import { BadRequestError } from "@utils/AppError";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
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
  }: InputCreateUserDTO): Promise<OutputCreateUserDTO> {
    // Verificar se o CPF, CNPJ, E-mail, Celular e Telefone já estão cadastrados
    const [cpfExists, cnpjExists, emailExists, celExists, telExists] = await Promise.all([
      this.userRepository.findByCpf(cpf),
      cnpj ? this.userRepository.findByCnpj(cnpj) : Promise.resolve(null),
      this.userRepository.findByEmail(email),
      this.userRepository.findByCel(cel),
      this.userRepository.findByTel(tel)
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

    // Criar o usuário
    const user = await this.userRepository.create({
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
      // Se o usuário não foi criado, lançar um erro
      throw new BadRequestError("User not created!");
    }

    return user;
  }
}
