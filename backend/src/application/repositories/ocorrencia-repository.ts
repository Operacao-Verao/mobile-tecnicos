import { Ocorrencia } from "@application/entities/ocorrencia";

export abstract class OcorrenciaRepository {
    abstract verOcorrencias(tecnicoId: number): Promise<Ocorrencia[]>
    abstract verUmaOcorrencia(id: number, tecnicoId: number): Promise<Ocorrencia>
    abstract filtrarPorStatus(dataHora: Date, tecnicoId: number): Promise<Ocorrencia[]>
}