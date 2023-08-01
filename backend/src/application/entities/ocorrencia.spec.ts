import { makeOcorrencias } from "@test/factories/ocorrencias-factory"

describe('Conteúdo de ocorrência', () => {
  it('Deve ser capaz de criar uma instância da classe ocorrência', () => {
    const ocorrencia = makeOcorrencias();

    expect(ocorrencia).toBeTruthy();
  })
})