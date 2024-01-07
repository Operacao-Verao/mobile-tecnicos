import { afetadosResponse } from "./AfetadosResponse";
import { animaisResponse } from "./AnimaisResponse";
import { dadosVistoriaResponse } from "./DadosVistoriaResponse";

export const relatorioResponse = {
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        example: '66f5d652-0666-44df-bbc1-e3b7ba60e2f1'
      },
      enfermos: {
        type: 'integer',
        description: 'Quantidade de enfermos',
        example: 2
      },
      gravidade: {
        type: 'integer',
        description: 'Nenhum (0), risco (1) ou desastre (2)',
        example: 1
      },
      interdicao: {
        type: 'integer',
        description: 'Não (0), parcial (1) ou total (1)',
        example: 1
      },
      situacaoVitimas: {
        type: 'integer',
        description: 'Inespecificado (0), desabrigados (1) ou desalojados (2)',
        example: 1
      },
      relatorio: {
        type: 'string',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu magna, auctor quis ullamcorper et, dictum vel augue. Cras nec eleifend tortor. Duis vel sapien mauris. Nulla tempus ex ac ex consequat congue. Aliquam non lacus ultrices, facilisis lectus eget, auctor leo. Donec feugiat volutpat neque ac ornare. Vivamus pretium condimentum erat, nec convallis metus euismod sit amet. Etiam eget ipsum semper, posuere ante eu, rhoncus lorem. Sed vitae tortor et erat scelerisque interdum. Sed lobortis lectus lacus, eu maximus nisl dictum sit amet. Curabitur quis leo mollis, maximus ipsum a, consectetur justo. Sed posuere imperdiet lectus eget consectetur. Aenean rutrum arcu ac lacus ullamcorper posuere.'
      },
      assunto: {
        type: 'string',
        example: 'O que aconteceu na ocorrência'
      },
      observacoes: {
        type: 'string',
        example: 'Caso tenha observações estarão aqui'
      },
      areaAfeta: {
        type: 'integer',
        description: 'Inespecificado (0), publica (1) ou particular (2)',
        example: 1
      },
      tipoConstrucao: {
        type: 'integer',
        description: 'Inespecificado (0), alvenaria (1), madeira (2) ou mista (3)',
        example: 0
      },
      tipoTalude: {
        type: 'integer',
        description: 'Inespecificado (0), natural (1), de corte (2) ou aterro (3)',
        example: 3
      },
      vegetacao: {
        type: 'integer',
        description: 'Nenhuma (0), rasteira (1) ou árvores (2)',
        example: 1
      },
      danosMateriais: {
        type: 'boolean',
        example: true
      },
      afetados: afetadosResponse,
      animais: animaisResponse,
      dadosVistoria: dadosVistoriaResponse,
      dataGeracao: {
        type: 'string',
        example: '2023-08-25 14:00:00',
        format: 'yyyy-mm-dd hh:ss:mm'
      },
      dataAtendimento: {
        type: 'string',
        example: '2023-08-25 14:00:00',
        format: 'yyyy-mm-dd hh:ss:mm'
      },
    } 
}