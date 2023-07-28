import { Ocorrencia } from "@application/entities/ocorrencia";

export abstract class OcorrenciaRepository {
    abstract alterarOcorrencia(ocorrencia: Ocorrencia): Promise<void>;
    abstract verOcorrencias(): Promise<Ocorrencia[]>
    abstract verUmaOcorrencia(id: string): Promise<Ocorrencia>
    abstract filtrarPorStatus(status: string): Promise<Ocorrencia[]>
}