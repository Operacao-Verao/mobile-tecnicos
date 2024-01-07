import { base64example } from "@helpers/base64";
import { InMemoryOcorrenciaRepository } from "@test/repositories/in-memory-ocorrencias-repository"
import { InMemoryRelatoriosRepository } from "@test/repositories/in-memory-relatorios-repository"
import { CriarRelatorio } from "./criar-relatorio";
import { makeCasa } from "@test/factories/casa-factory";

describe('Criar relatório', () => {
    it('Deve ser capaz de criar um relatório para uma ocorrência', async () => {
        const ocorrenciasRepository = new InMemoryOcorrenciaRepository();
        const relatoriosRepository = new InMemoryRelatoriosRepository(ocorrenciasRepository);

        const criarRelatorio = new CriarRelatorio(relatoriosRepository);
        
        const ocorrencia = await ocorrenciasRepository.criarOcorrencia();

        const casa = makeCasa();

        const { relatorio } = await criarRelatorio.execute({
            vegetacao: 1,
            casaId: casa.id,
            tecnicoId: ocorrencia.tecnico.id,
            interdicao: 1,
            situacaoVitimas: 1,
            areaAfetada: 1,
            assunto: "",
            danosMateriais: false,
            ocorrenciaId: ocorrencia.id,
            gravidade: 1,
            relatorio: "",
            observacoes: "",
            tipoConstrucao: 2,
            assinaturaCivil: "",
            assinaturaTecnico: "",
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
            },
            dadosVistoria: {
                arvores: true,
                deslizamento: true,
                desmoronamento: true,
                erosao: false,
                esgoto_escoamento: true,
                incendio: false,
                infiltracao_trinca: true,
                inundacao: true,
                judicial: false,
                monitoramento: false,
                transito: false,
                outros: ""
            }
        });

        expect(relatoriosRepository.relatorios).toHaveLength(1);
        expect(relatoriosRepository.relatorios[0]).toBe(relatorio);
    })
})