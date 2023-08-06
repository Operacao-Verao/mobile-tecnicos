import { base64example } from "@helpers/base64";
import { InMemoryOcorrenciaRepository } from "@test/repositories/in-memory-ocorrencias-repository"
import { InMemoryRelatoriosRepository } from "@test/repositories/in-memory-relatorios-repository"
import { AtualizarRelatorio } from "./atualizar-relatorio";
import { makeRelatorios } from "@test/factories/relatorios-factory";

describe('Atualizar relatório', () => {
    it('Deve ser capaz de criar um relatório para uma ocorrência', async () => {
        const ocorrenciasRepository = new InMemoryOcorrenciaRepository();
        const relatoriosRepository = new InMemoryRelatoriosRepository();

        const atualizarRelatorio = new AtualizarRelatorio(relatoriosRepository);
        
        const novoRelatorio = makeRelatorios();

        const ocorrencia = await ocorrenciasRepository.criarOcorrencia();
        await relatoriosRepository.criarRelatorio(novoRelatorio, ocorrencia.id);

        const { relatorio } = await atualizarRelatorio.execute({
            id: novoRelatorio.id,
            vegetacao: 1,
            interdicao: 1,
            situacaoVitimas: 1,
            areaAfetada: 1,
            assunto: "",
            danosMateriais: false,
            ocorrenciaId: ocorrencia.id,
            enfermos: 0,
            gravidade: 1,
            relatorio: "",
            encaminhamento: "",
            memorando: "",
            oficio: "",
            processo: "",
            observacoes: "",
            tipoConstrucao: 2,
            tipoTalude: 1,
            fotos: [
                {
                    url: base64example
                }
            ],
            dataGeracao: new Date(),
            dataAtendimento: new Date(),
            afetados: {
              adultos: 1,
              criancas: 1,
              enfermos: 1,
              especiais: 0,
              feridos: 0,
              idosos: 1,
              mortos: 0  
            },
            animais: {
                aves: 1,
                caes: 1,
                equinos: 0,
                gatos: 1
            }
        });

        expect(relatoriosRepository.relatorios).toHaveLength(1);
        expect(relatoriosRepository.relatorios[0]).toBe(relatorio);
    })
})