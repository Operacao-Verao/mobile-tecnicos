import { makeTecnico } from "@test/factories/tecnicos-factory";

describe('Conteúdo do técnico', () => {
  it('deve ser capaz de criar uma instância da classe técnico', () => {
    const tecnico = makeTecnico();

    expect(tecnico).toBeTruthy();
  }) 
})