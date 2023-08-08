import { InMemoryOcorrenciaRepository } from "@test/repositories/in-memory-ocorrencias-repository"
import { InMemoryRelatoriosRepository } from "@test/repositories/in-memory-relatorios-repository";
import { VerRelatoriosOcorrencia } from "./ver-relatorios-ocorrencia";
import { makeRelatorios } from "@test/factories/relatorios-factory";

describe('Ver relatórios ocorrência', () => {
    it('Deve ser capaz de listar os relatórios de uma ocorrência', async () => {
        const ocorrenciasRepository = new InMemoryOcorrenciaRepository();
        const relatoriosRepository = new InMemoryRelatoriosRepository(ocorrenciasRepository);

        const verRelatoriosOcorrencia = new VerRelatoriosOcorrencia(relatoriosRepository);

        const ocorrencia = await ocorrenciasRepository.criarOcorrencia();
        
        const relatorio = makeRelatorios();
        
        await relatoriosRepository.criarRelatorio(relatorio, ocorrencia.id);

        const { relatorios } = await verRelatoriosOcorrencia.execute({ocorrenciaId: ocorrencia.id, tecnicoId: ocorrencia.tecnico.id});

        expect(relatorios[0]).toStrictEqual(relatorio);
    })
})