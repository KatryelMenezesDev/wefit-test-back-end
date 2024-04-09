import { UserDTO } from "@modules/User/DTOs/User/UserDTO";
import { IUserRepository } from "@modules/User/Repositories/IUserRepository";
import { prisma } from "@shared/infra/prisma/prismaClient";

export class UserRepository implements IUserRepository {
  async create(User: UserDTO): Promise<UserDTO> {
    const user = await prisma.user.create({
      data: {
        name: User.name,
        cnpj: User.cnpj,
        cpf: User.cpf,
        email: User.email,
        cel: User.cel,
        tel: User.tel,
        cep: User.cep,
        street: User.street,
        number: User.number,
        city: User.city,
        district: User.district,
        state: User.state
      }
    });

    return user;
  }

  async read(id: number): Promise<UserDTO> {
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    });

    return user;
  }

  async update(User: UserDTO): Promise<UserDTO> {
    const user = await prisma.user.update({
      where: {
        id: User.id
      },
      data: {
        name: User.name,
        cnpj: User.cnpj,
        cpf: User.cpf,
        email: User.email,
        cel: User.cel,
        tel: User.tel,
        cep: User.cep,
        street: User.street,
        number: User.number,
        city: User.city,
        district: User.district,
        state: User.state
      }
    });

    return user;
  }

  async delete(id: number): Promise<void> {
    await prisma.user.delete({
      where: {
        id
      }
    });
  }

  async findByEmail(email: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    });

    return !!user;
  }

  async findByCpf(cpf: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: {
        cpf
      }
    });

    return !!user;
  }

  async findByCnpj(cnpj: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: {
        cnpj
      }
    });

    return !!user;
  }

  async findByCel(cel: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: {
        cel
      }
    });

    return !!user;
  }

  async findByTel(tel: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: {
        tel
      }
    });

    return !!user;
  }
}
