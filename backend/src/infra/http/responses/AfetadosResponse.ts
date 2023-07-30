export const afetadosResponse = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      example: '66f5d652-0666-44df-bbc1-e3b7ba60e2f1'
    },
    adultos: {
      type: 'integer',
      example: 3
    },
    criancas: {
      type: 'integer',
      example: 1
    },
    idosos: {
      type: 'integer',
      example: 1
    },
    especiais: {
      type: 'integer',
      example: 0
    },
    mortos: {
      type: 'integer',
      example: 1
    },
    feridos: {
      type: 'integer',
      example: 2
    },
    enfermos: {
      type: 'integer',
      example: 0
    },
  }
}