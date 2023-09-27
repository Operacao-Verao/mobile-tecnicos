import { makeCasa } from "@test/factories/casa-factory";

describe('Conteúdo de casa', () => {
  it('deve ser capaz de criar uma instância da classe casa', () => {
    const casa = makeCasa();

    expect(casa).toBeTruthy();
  }) 
})