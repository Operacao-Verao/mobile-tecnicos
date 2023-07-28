import { makeAnimais } from "@test/factories/animais-factory";

describe('Conteúdo animais', () => {
    it('deve ser capaz de criar uma instância da classe animais', () => {
        const animais = makeAnimais();

        expect(animais).toBeTruthy();
    })
})