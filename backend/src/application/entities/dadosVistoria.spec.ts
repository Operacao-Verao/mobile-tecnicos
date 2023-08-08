import { makeDadosVistoria } from "@test/factories/dados-vistoria-factory";

describe('Conteúdo dados vistoria', () => {
    it('deve ser capaz de criar uma instância da classe dados vistoria', () => {
        const dados = makeDadosVistoria();

        expect(dados).toBeTruthy();
    })
})