import { Ocorrencia } from "@application/entities/ocorrencia";

export abstract class OcorrenciaRepository {
    abstract verOcorrencias(tecnicoId: number): Promise<Ocorrencia[]>
    abstract verUmaOcorrencia(id: number): Promise<Ocorrencia>
    abstract filtrarPorStatus(status: string): Promise<Ocorrencia[]>
}