import { Ocorrencia } from "@application/entities/ocorrencia";
import { OcorrenciaRepository } from "@application/repositories/ocorrencia-repository";
import { OcorrenciasNotFound } from "@application/use-cases/errors/OcorrenciasNotFound";
import { makeOcorrencias } from "@test/factories/ocorrencias-factory";

export class InMemoryOcorrenciaRepository implements OcorrenciaRepository {
    private ocorrencias: Ocorrencia[] = [];

    async criarOcorrencia(): Promise<Ocorrencia> {
        const novaOcorrencia = makeOcorrencias();

        this.ocorrencias.push(novaOcorrencia);
        return novaOcorrencia
    }

    async verOcorrencias(tecnicoId: number): Promise<Ocorrencia[]> {
        let ocorrenciasExist = this.ocorrencias.filter((item) => item.tecnico.id === tecnicoId); 

        if(!ocorrenciasExist) {
            throw new OcorrenciasNotFound();
        }

        return ocorrenciasExist;

    }

    async verUmaOcorrencia(id: number, tecnicoId: number): Promise<Ocorrencia> {
        let ocorrenciaExist = this.ocorrencias.find((item) => item.tecnico.id === tecnicoId && item.id === id); 

        if(!ocorrenciaExist) {
            throw new OcorrenciasNotFound();
        }

        return ocorrenciaExist;
    }
    
    async filtrarPorStatus(dataHora: Date, tecnicoId: number): Promise<Ocorrencia[]> {
        const ocorrencias = this.ocorrencias.filter(
            (item) => item.tecnico.id === tecnicoId &&
            item.data <= dataHora
        );

        if(!ocorrencias) {
            throw new OcorrenciasNotFound();
        }

        return ocorrencias;
    }
    
}