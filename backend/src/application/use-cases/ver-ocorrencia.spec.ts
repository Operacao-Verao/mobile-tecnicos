import { InMemoryOcorrenciaRepository } from "@test/repositories/in-memory-ocorrencias-repository"
import { VerOcorrencia } from "./ver-ocorrencia";
import { InMemoryTecnicosRepository } from "@test/repositories/in-memory-tecnicos-repository";

describe('Ver ocorrência', () => {
    it('Deve ser capaz de mostrar uma ocorrência designada a um técnico', async () => {
        const ocorrenciaRepository = new InMemoryOcorrenciaRepository();
        const tecnicosRepository = new InMemoryTecnicosRepository();
    
        const tecnico = await tecnicosRepository.criarTecnico();
        const novaOcorrencia = await ocorrenciaRepository.criarOcorrencia();
    
        const verOcorrencia = new VerOcorrencia(ocorrenciaRepository);
    
        const { ocorrencia } = await verOcorrencia.execute({
            tecnicoId: tecnico.id,
            ocorrenciaId: novaOcorrencia.id
        });
    
        expect(ocorrencia).toBe(novaOcorrencia);
    })
    
})