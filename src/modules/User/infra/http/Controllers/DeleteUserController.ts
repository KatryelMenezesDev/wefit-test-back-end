import { Response, Request } from "express";
import { container } from "tsyringe";

import { OutputDeleteUserDTO } from "@modules/User/DTOs/User/DeleteUser";
import { DeleteUserUseCase } from "@modules/User/UseCases/DeleteUserUseCase";

export class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteUseCase = container.resolve(DeleteUserUseCase);
    const result: OutputDeleteUserDTO = await deleteUseCase.execute({ id: Number(id) });

    return res.status(200).json(result);
  }
}
