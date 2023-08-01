import { Ocorrencia } from "@application/entities/ocorrencia";
import { OcorrenciaRepository } from "@application/repositories/ocorrencia-repository";
import { OcorrenciasNotFound } from "@application/use-cases/errors/OcorrenciasNotFound";
import { makeOcorrencias } from "@test/factories/ocorrencias-factory";

export class InMemoryOcorrenciaRepository implements OcorrenciaRepository {
    private ocorrencias: Ocorrencia[] = [];

    async criarOcorrencia(): Promise<void> {
        const novaOcorrencia = makeOcorrencias();

        this.ocorrencias.push(novaOcorrencia);
    }

    async verOcorrencias(tecnicoId: number): Promise<Ocorrencia[]> {
        let ocorrenciasExist = this.ocorrencias.filter((item) => item.tecnico.id === tecnicoId); 

        if(!ocorrenciasExist) {
            throw new OcorrenciasNotFound();
        }

        return ocorrenciasExist;

    }

    async verUmaOcorrencia(id: number): Promise<Ocorrencia> {
        throw new Error("Method not implemented.");
    }
    
    async filtrarPorStatus(status: string): Promise<Ocorrencia[]> {
        throw new Error("Method not implemented.");
    }
    
}