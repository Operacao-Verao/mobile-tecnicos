import { InMemoryOcorrenciaRepository } from "@test/repositories/in-memory-ocorrencias-repository"
import { VerOcorrencias } from "./ver-ocorrencias";
import { InMemoryTecnicosRepository } from "@test/repositories/in-memory-tecnicos-repository";

describe('Ver ocorrências', () => {
    it('Deve ser capaz de mostrar as ocorrências designadas a um técnico', async () => {
        const ocorrenciaRepository = new InMemoryOcorrenciaRepository();
        const tecnicosRepository = new InMemoryTecnicosRepository();
    
        const tecnico = await tecnicosRepository.criarTecnico();
        ocorrenciaRepository.criarOcorrencia();
    
        const verOcorrencias = new VerOcorrencias(ocorrenciaRepository);
    
        const { ocorrencias } = await verOcorrencias.execute({
            tecnicoId: tecnico.id
        });
    
        expect(ocorrencias).toHaveLength(1);
    })
    
})