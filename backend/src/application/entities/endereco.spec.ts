import { makeEndereco } from "@test/factories/endereco-factory"

describe('Conteúdo de endereço', () => {
  it('Deve ser capaz de criar uma instância da classe endereço', () => {
    const endereco = makeEndereco();

    expect(endereco).toBeTruthy();
  })
})