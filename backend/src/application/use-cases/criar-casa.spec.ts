import { InMemoryCasasRepository } from "@test/repositories/in-memory-casas-repositort";
import { CriarCasa } from "./criar-casa";
import { makeCasa } from "@test/factories/casa-factory";

describe('Criar casa', () => {
  it('Deve ser capaz de criar uma casa', async () => {
    const casasRepository = new InMemoryCasasRepository();
    const criarCasa = new CriarCasa(casasRepository);

    const novaCasa = makeCasa();

    const { casa } = await criarCasa.execute({complemento: novaCasa.complemento, interdicao: novaCasa.interdicao, id_residencial: 1});
    
    expect(casasRepository.casas).toHaveLength(1);
    expect(casasRepository.casas[0]).toBe(casa);
  })
})