import { Tecnico } from "@application/entities/tecnico";

export class TecnicoViewModel {
  static toHTTP(tecnico: Tecnico) {
    return {
      id: tecnico.id,
      email: tecnico.email,
      nome: tecnico.nome
    }
  }
}