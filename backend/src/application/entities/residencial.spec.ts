import { makeResidencial } from "@test/factories/residencial-factory";

describe('Conteúdo de residencial', () => {
  it('deve ser capaz de criar uma instância da classe residencial', () => {
    const residencial = makeResidencial();

    expect(residencial).toBeTruthy();
  }) 
})