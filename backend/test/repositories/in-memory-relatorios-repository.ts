import { Ocorrencia } from "@application/entities/ocorrencia";
import { Relatorio } from "@application/entities/relatorio";
import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { RelatorioNotFound } from "@application/use-cases/errors/RelatorioNotFound";

export class InMemoryRelatoriosRepository implements RelatoriosRepository {
    public relatorios: Relatorio[] = [];

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

    async excluirRelatorio(relatorio: Relatorio): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async listarRelatoriosOcorrencia(ocorrencia: Ocorrencia): Promise<Relatorio[]> {
        throw new Error("Method not implemented.");
    }
}