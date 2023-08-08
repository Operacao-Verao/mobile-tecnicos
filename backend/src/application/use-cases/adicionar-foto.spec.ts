import { InMemoryRelatoriosRepository } from "@test/repositories/in-memory-relatorios-repository";
import { AdicionarFoto } from "./adicionar-foto"
import { InMemoryOcorrenciaRepository } from "@test/repositories/in-memory-ocorrencias-repository";
import { makeRelatorios } from "@test/factories/relatorios-factory";

describe('Adicionar foto', () => {
  it('Deve ser capaz de adicionar uma foto a um relatório', async () => {
    const ocorrenciasRepository = new InMemoryOcorrenciaRepository();
    const relatoriosRepository = new InMemoryRelatoriosRepository(ocorrenciasRepository);
    const adicionarFoto = new AdicionarFoto(relatoriosRepository);

    const ocorrencia = await ocorrenciasRepository.criarOcorrencia();
    const relatorio = makeRelatorios();

    await relatoriosRepository.criarRelatorio(relatorio, ocorrencia.id);

    const { url } = await adicionarFoto.execute({relatorioId: relatorio.id, tecnicoId: ocorrencia.tecnico.id, url: "base64"});

    expect(url).toBe("base64");
  })
})