import { Tecnico } from "@application/entities/tecnico"
import { Funcionario as RawFuncionario, Tecnico as RawTecnico } from "@prisma/client"

interface RawTecnicoAndFuncionario extends RawFuncionario {
  Tecnico: RawTecnico
}

export class PrismaTecnicoMapper {
  static toDomain(rawTecnico: RawTecnicoAndFuncionario) {
    return new Tecnico({
      email: rawTecnico.email,
      nome: rawTecnico.nome,
      senha: rawTecnico.senha
    },
    rawTecnico.Tecnico.id
    )
  }
}