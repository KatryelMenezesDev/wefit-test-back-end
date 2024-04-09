import { container } from "tsyringe";

import { UserRepository } from "@modules/User/infra/prisma/Repositories/UserRepository";
import { IUserRepository } from "@modules/User/Repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
