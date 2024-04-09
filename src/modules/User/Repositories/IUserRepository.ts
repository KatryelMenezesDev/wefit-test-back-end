import { UserDTO } from "../DTOs/User/UserDTO";

export interface IUserRepository {
  create(user: UserDTO): Promise<UserDTO>;
  findByEmail(email: string): Promise<boolean>;
  findByCpf(cpf: string): Promise<boolean>;
  findByCnpj(cnpj: string): Promise<boolean>;
  findByCel(cel: string): Promise<boolean>;
  findByTel(tel: string): Promise<boolean>;
}
