import { Response, Request } from "express";
import { container } from "tsyringe";

import { InputUpdateUserDTO, OutputUpdateUserDTO } from "@modules/User/DTOs/User/UpdateUser";
import { UpdateUserUseCase } from "@modules/User/UseCases/UpdateUserUseCase";

export class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, cnpj, cpf, email, cel, tel, cep, street, number, city, district, state }: InputUpdateUserDTO =
      req.body;
    const updateUseCase = container.resolve(UpdateUserUseCase);
    const result: OutputUpdateUserDTO = await updateUseCase.execute({
      id: Number(id),
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

    return res.status(200).json(result);
  }
}
