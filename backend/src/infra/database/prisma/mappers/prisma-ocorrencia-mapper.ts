import { Ocorrencia } from '@application/entities/ocorrencia'
import { Tecnico } from '@application/entities/tecnico'
import { Ocorrencia as RawOcorrencia, Relatorio as RawRelatorio, Tecnico as RawTecnico, Funcionario as RawFuncionario } from '@prisma/client'

interface RawTecnicoWithJoins extends RawTecnico {
  Funcionario: RawFuncionario
}

interface RawOcorrenciasWithJoins extends RawOcorrencia {
  Tecnico: RawTecnicoWithJoins,
  Relatorio: RawRelatorio
}

export class PrismaOcorrenciaMapper {
  static toDomain(rawOcorrencia: RawOcorrenciasWithJoins) {
    const tecnico = new Tecnico({
      email: rawOcorrencia.Tecnico.Funcionario.email,
      nome: rawOcorrencia.Tecnico.Funcionario.nome,
      senha: rawOcorrencia.Tecnico.Funcionario.senha
    }, rawOcorrencia.Tecnico.id);

    return new Ocorrencia({
      acionamento: rawOcorrencia.acionamento,
      data: rawOcorrencia.dataOcorrencia,
      num_casas: rawOcorrencia.num_Casas,
      relato: rawOcorrencia.relato_Civil,
      status: rawOcorrencia.aprovado,
      tecnico: tecnico
    })
  }
}