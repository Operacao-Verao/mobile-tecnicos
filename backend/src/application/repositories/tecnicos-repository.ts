import { Tecnico } from "@application/entities/tecnico";

export abstract class TecnicosRepository {
  abstract login(email: string, senha: string): Promise<string>
  abstract verDados(id: string): Promise<Tecnico>
}