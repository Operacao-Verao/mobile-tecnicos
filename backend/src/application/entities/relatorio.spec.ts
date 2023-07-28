import { makeRelatorios } from "@test/factories/relatorios-factory";

describe('Conteúdo relatório', () => {
    it('deve ser capaz de criar uma instância da classe relatórios', () => {
        const relatorio = makeRelatorios();

        expect(relatorio).toBeTruthy();
    })
})