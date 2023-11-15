import { InMemoryTecnicosRepository } from "@test/repositories/in-memory-tecnicos-repository";
import { RegistrarToken } from "./registrar-token";
import { makeTecnico } from "@test/factories/tecnicos-factory";

describe('Registrar token', () => {
  it('Deve ser capaz de registrar um token', async () => {
    const tecnicosRepository = new InMemoryTecnicosRepository();
    const registrarToken = new RegistrarToken(tecnicosRepository);

    const novoTecnico = makeTecnico();

    const response = await registrarToken.execute({
        tecnicoId: novoTecnico.id,
        token: 'xxxx-xxxx-xxxx'
    });
    
    expect(response).toBe("Token cadastrado com sucesso.");
  })
})