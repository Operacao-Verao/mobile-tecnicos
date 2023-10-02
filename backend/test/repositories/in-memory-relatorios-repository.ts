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

    async adicionarFoto(url: string, relatorioId: number, tecnicoId: number): Promise<void> {
        const relatorio = this.relatorios.find((item) =>  item.id === relatorioId)

        if(!relatorio) {
            throw new RelatorioNotFound();
        }

        relatorio.fotos.push({url});
    }

    async apagarFoto(fotoId: number, relatorioId: number, tecnicoId: number): Promise<void> {
        const relatorio = this.relatorios.find((item) =>  item.id === relatorioId)

        if(!relatorio) {
            throw new RelatorioNotFound();
        }

        relatorio.fotos.pop();
    }

    async listarRelatoriosCasa(casaId: number): Promise<Relatorio[]> {
        const relatorios = this.relatorios.filter((item) =>  item.casaId === casaId);

        return relatorios;
    }
}