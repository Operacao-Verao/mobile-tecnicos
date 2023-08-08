import { InMemoryRelatoriosRepository } from "@test/repositories/in-memory-relatorios-repository";
import { InMemoryOcorrenciaRepository } from "@test/repositories/in-memory-ocorrencias-repository";
import { makeRelatorios } from "@test/factories/relatorios-factory";
import { ApagarFoto } from "./apagar-foto";

describe('Apagar foto', () => {
  it('Deve ser capaz de apagar uma foto a um relatório', async () => {
    const ocorrenciasRepository = new InMemoryOcorrenciaRepository();
    const relatoriosRepository = new InMemoryRelatoriosRepository(ocorrenciasRepository);
    const apagarFoto = new ApagarFoto(relatoriosRepository);

    const ocorrencia = await ocorrenciasRepository.criarOcorrencia();
    const relatorio = makeRelatorios();

    await relatoriosRepository.criarRelatorio(relatorio, ocorrencia.id);


    const { mensagem } = await apagarFoto.execute({relatorioId: relatorio.id, tecnicoId: ocorrencia.tecnico.id, fotoId: 1});
    
    expect(mensagem).toBe("Foto deletada com sucesso");
    expect(relatoriosRepository.relatorios[0].fotos).toHaveLength(0);
  })
})