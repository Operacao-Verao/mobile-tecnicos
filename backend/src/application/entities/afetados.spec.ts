import { makeAfetados } from "@test/factories/afetados-factory"

describe('Conteúdo afetados', () => {
    it('deve ser capaz de criar uma instância da classe afetados', () => {
        const afetado = makeAfetados();

        expect(afetado).toBeTruthy();
    })
})