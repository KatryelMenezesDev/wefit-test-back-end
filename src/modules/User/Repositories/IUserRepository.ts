import { UserDTO } from "../DTOs/User/UserDTO";

export interface IUserRepository {
  // Interface CRUD do usuário
  create(user: UserDTO): Promise<UserDTO>;
  read(id: number): Promise<UserDTO>;

  // Interdace para verificar se o usuário já existe
  findByEmail(email: string): Promise<boolean>;
  findByCpf(cpf: string): Promise<boolean>;
  findByCnpj(cnpj: string): Promise<boolean>;
  findByCel(cel: string): Promise<boolean>;
  findByTel(tel: string): Promise<boolean>;
}
