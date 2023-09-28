import { Ocorrencia } from "@application/entities/ocorrencia";
import { TecnicoViewModel } from "./tecnico-view-model";
import { RelatorioViewModel } from "./relatorio-view-model";
import { EnderecoViewModel } from "./endereco-view-model";

export class OcorrenciaViewModel {
  static toHTTP(ocorrencia: Ocorrencia) {
    return {
      id: ocorrencia.id,
      acionamento: ocorrencia.acionamento,
      data: ocorrencia.data,
      num_casas: ocorrencia.num_casas,
      status: ocorrencia.status,
      endereco: EnderecoViewModel.toHTTP(ocorrencia.residencial),
      tecnico: TecnicoViewModel.toHTTP(ocorrencia.tecnico),
      relatorios: ocorrencia.relatorios.map(RelatorioViewModel.toHTTP),
    }
  }
}