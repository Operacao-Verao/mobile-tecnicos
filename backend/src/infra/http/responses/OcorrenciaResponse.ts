import { enderecoResponse } from "./EnderecoResponse";
import { relatorioResponse } from "./RelatorioResponse";

export const ocorrenciaResponse = {
  ocorrencia: {
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        example: '66f5d652-0666-44df-bbc1-e3b7ba60e2f1'
      },
      acionamento: {
        type: 'string',
        example: 'Por telefone'
      },
      relato: {
        type: 'string',
        example: 'Enchente na vilinha com deslizamento em duas casas no mesmo número'
      },
      num_casas: {
        type: 'integer',
        example: 2
      },
      status: {
        type: 'string',
        example: 'Interditado'
      },
      data: {
        type: 'string',
        example: '2023-08-25 14:00:00',
        format: 'yyyy-mm-dd hh:ss:mm'
      },
      relatorio: relatorioResponse,
      endereco: enderecoResponse
    }  
  }
}