import { Ocorrencia } from "@application/entities/ocorrencia";
import { Relatorio } from "@application/entities/relatorio";
import { RelatoriosRepository } from "@application/repositories/relatorios-repository";

export class InMemoryRelatoriosRepository implements RelatoriosRepository {
    public relatorios: Relatorio[] = [];

    async criarRelatorio(relatorio: Relatorio, ocorrenciaId: number): Promise<void> {
        this.relatorios.push(relatorio);
    }

    async alterarRelatorio(relatorio: Relatorio): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async excluirRelatorio(relatorio: Relatorio): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async listarRelatoriosOcorrencia(ocorrencia: Ocorrencia): Promise<Relatorio[]> {
        throw new Error("Method not implemented.");
    }
}