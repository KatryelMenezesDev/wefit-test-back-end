import { Response, Request } from "express";
import { container } from "tsyringe";

import { InputCreateUserDTO, OutputCreateUserDTO } from "@modules/User/DTOs/User/CreateUser";
import { CreateUserUseCase } from "@modules/User/UseCases/CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, cnpj, cpf, email, cel, tel, cep, street, number, city, district, state }: InputCreateUserDTO =
      req.body;
    const createUseCase = container.resolve(CreateUserUseCase);
    const result: OutputCreateUserDTO = await createUseCase.execute({
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

    return res.status(201).json(result);
  }
}
