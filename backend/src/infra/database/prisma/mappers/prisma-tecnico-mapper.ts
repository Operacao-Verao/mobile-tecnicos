import { Tecnico } from "@application/entities/tecnico"
import { Funcionario as RawTecnico } from "@prisma/client"

export class PrismaTecnicoMapper {
  static toDomain(rawTecnico: RawTecnico) {
    return new Tecnico({
      email: rawTecnico.email,
      nome: rawTecnico.nome,
      senha: rawTecnico.senha
    },
    rawTecnico.id
    )
  }
}