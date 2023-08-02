import { InMemoryOcorrenciaRepository } from "@test/repositories/in-memory-ocorrencias-repository";
import { InMemoryTecnicosRepository } from "@test/repositories/in-memory-tecnicos-repository";
import { FiltrarOcorrencia } from "./filtrar-ocorrencia";

describe('Filtrar ocorrência', () => {
  it('Deve ser capaz de mostrar uma ocorrência designada a um técnico filtrada por data', async () => {
    const ocorrenciaRepository = new InMemoryOcorrenciaRepository();
    const tecnicosRepository = new InMemoryTecnicosRepository();

    const tecnico = await tecnicosRepository.criarTecnico();
    const novaOcorrencia = await ocorrenciaRepository.criarOcorrencia();

    const filtrarOcorrencia = new FiltrarOcorrencia(ocorrenciaRepository);

    const { ocorrencias } = await filtrarOcorrencia.execute({
      tecnicoId: tecnico.id,
      dataHora: novaOcorrencia.data
    });
    
    expect(ocorrencias).toHaveLength(1);
  })
})