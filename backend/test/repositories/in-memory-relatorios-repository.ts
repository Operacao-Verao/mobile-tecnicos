import { Relatorio } from "@application/entities/relatorio";
import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { RelatorioNotFound } from "@application/use-cases/errors/RelatorioNotFound";
import { InMemoryOcorrenciaRepository } from "./in-memory-ocorrencias-repository";

export class InMemoryRelatoriosRepository implements RelatoriosRepository {
    public relatorios: Relatorio[] = [];
    public ocorrenciasRepository: InMemoryOcorrenciaRepository;
    
    constructor(ocorrenciasRepository: InMemoryOcorrenciaRepository) {
        this.ocorrenciasRepository = ocorrenciasRepository;
    }

    async criarRelatorio(relatorio: Relatorio, ocorrenciaId: number): Promise<void> {
        this.relatorios.push(relatorio);
    }

    async alterarRelatorio(relatorio: Relatorio): Promise<void> {
        let relatorioExiste = this.relatorios.find((item) => item.id === relatorio.id);

        if(!relatorioExiste) {
            throw new RelatorioNotFound();
        }

        for(let i = 0; i < this.relatorios.length; i++) {
            if(this.relatorios[i].id === relatorioExiste.id) {
                this.relatorios[i] = relatorio;
            }
        }
    }

    async listarRelatoriosOcorrencia(ocorrenciaId: number, tecnicoId: number): Promise<Relatorio[]> {
        const ocorrencia = await this.ocorrenciasRepository.verUmaOcorrencia(ocorrenciaId, tecnicoId);

        return ocorrencia.relatorios;
    }
}