import { Tecnico } from "@application/entities/tecnico";

export abstract class TecnicosRepository {
  abstract findByEmail(email: string): Promise<Tecnico>
  abstract findById(id: number): Promise<Tecnico>
  abstract registrarToken(id: number, token: string): Promise<string>
}