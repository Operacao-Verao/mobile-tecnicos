export const enderecoResponse = {
    type: 'object',
    properties: {
      cep: {
        type: 'string',
        example: '00000-000'
      },
      rua: {
        type: 'Rua da vilinha',
        example: 2
      },
      cidade: {
        type: 'string',
        example: 'Franco da Rocha'
      },
      bairro: {
        type: 'string',
        example: 'Vilinha'
      },
      numero: {
        type: 'string',
        example: '123'
      },
      casas: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1 
            },
            interdicao: {
              type: 'integer',
              example: 1
            },
            complemento: {
              type: 'string',
              example: 'próximo de algum lugar'
            }
          }
        }
      }
    } 
}