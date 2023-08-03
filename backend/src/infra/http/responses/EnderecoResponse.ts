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
      }
    } 
}