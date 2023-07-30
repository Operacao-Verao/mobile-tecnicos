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
        example: 2
      },
      gravidade: {
        type: 'string',
        example: 'Grave'
      },
      relatorio: {
        type: 'string',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu magna, auctor quis ullamcorper et, dictum vel augue. Cras nec eleifend tortor. Duis vel sapien mauris. Nulla tempus ex ac ex consequat congue. Aliquam non lacus ultrices, facilisis lectus eget, auctor leo. Donec feugiat volutpat neque ac ornare. Vivamus pretium condimentum erat, nec convallis metus euismod sit amet. Etiam eget ipsum semper, posuere ante eu, rhoncus lorem. Sed vitae tortor et erat scelerisque interdum. Sed lobortis lectus lacus, eu maximus nisl dictum sit amet. Curabitur quis leo mollis, maximus ipsum a, consectetur justo. Sed posuere imperdiet lectus eget consectetur. Aenean rutrum arcu ac lacus ullamcorper posuere.'
      },
      encaminhamento: {
        type: 'string',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu magna, auctor quis ullamcorper et, dictum vel augue. Cras nec eleifend tortor. Duis vel sapien mauris. Nulla tempus ex ac ex consequat congue. Aliquam non lacus ultrices, facilisis lectus eget, auctor leo. Donec feugiat volutpat neque ac ornare.'
      },
      memorando: {
        type: 'string',
        example: '65913'
      },
      oficio: {
        type: 'string',
        example: 'Ofício de exemplo'
      },
      processo: {
        type: 'string',
        example: 'Processo de exemplo'
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
        type: 'string',
        example: 'Vilinha'
      },
      tipoConstrucao: {
        type: 'string',
        example: 'Casas'
      },
      tipoTalude: {
        type: 'string',
        example: 'Natural'
      },
      vegetacao: {
        type: 'string',
        example: 'Pouca vegetação ao redor'
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