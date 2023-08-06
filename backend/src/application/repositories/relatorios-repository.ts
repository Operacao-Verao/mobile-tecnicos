import { Ocorrencia } from "@application/entities/ocorrencia";
import { Relatorio } from "@application/entities/relatorio";

export abstract class RelatoriosRepository {
  abstract criarRelatorio(relatorio: Relatorio, ocorrenciaId: number): Promise<void>
  abstract alterarRelatorio(relatorio: Relatorio, ocorrenciaId: number): Promise<void>
  abstract excluirRelatorio(relatorio: Relatorio): Promise<boolean>
  abstract listarRelatoriosOcorrencia(ocorrencia: Ocorrencia): Promise<Relatorio[]>
}