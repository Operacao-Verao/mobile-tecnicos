import { Relatorio } from "@application/entities/relatorio";

export abstract class RelatoriosRepository {
  abstract criarRelatorio(relatorio: Relatorio, ocorrenciaId: number, tecnicoId: number, casaId: number): Promise<void>
  abstract alterarRelatorio(relatorio: Relatorio, ocorrenciaId: number, tecnicoId: number, casaId: number): Promise<void>
  abstract adicionarFoto(url: string, relatorioId: number, tecnicoId: number): Promise<void>
  abstract apagarFoto(fotoId: number, relatorioId: number, tecnicoId: number): Promise<void>
  abstract listarRelatoriosCasa(casaId: number): Promise<Relatorio[]>
}