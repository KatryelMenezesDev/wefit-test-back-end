import { Response, Request } from "express";
import { container } from "tsyringe";

import { OutputReadUserDTO } from "@modules/User/DTOs/User/ReadUser";
import { ReadUserUseCase } from "@modules/User/UseCases/ReadUserUseCase";

export class ReadUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const readUseCase = container.resolve(ReadUserUseCase);
    const result: OutputReadUserDTO = await readUseCase.execute({ id: Number(id) });

    return res.status(200).json(result);
  }
}
