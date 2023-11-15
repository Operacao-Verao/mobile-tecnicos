import { Tecnico } from "@application/entities/tecnico"
import { Funcionario as RawFuncionario, Tecnico as RawTecnico } from "@prisma/client"

interface RawTecnicoAndFuncionario extends RawTecnico {
  Funcionario: RawFuncionario
}

export class PrismaTecnicoMapper {
  static toDomain(rawTecnico: RawTecnicoAndFuncionario) {
    return new Tecnico({
        email: rawTecnico.Funcionario.email,
        nome: rawTecnico.Funcionario.nome,
        senha: rawTecnico.Funcionario.senha,
        token: rawTecnico.token
      },
      rawTecnico.id
    )
  }
}