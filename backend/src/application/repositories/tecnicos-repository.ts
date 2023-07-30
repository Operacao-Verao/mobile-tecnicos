import { Tecnico } from "@application/entities/tecnico";

export abstract class TecnicosRepository {
  abstract findByEmail(email: string): Promise<Tecnico>
  abstract verDados(id: string): Promise<Tecnico>
}