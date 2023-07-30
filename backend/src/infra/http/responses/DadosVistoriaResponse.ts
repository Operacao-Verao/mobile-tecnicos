export const dadosVistoriaResponse = {
  type: 'object',
  properties: {
    desmoronamento: {
      type: 'boolean',
      example: true
    },
    escorregamento: {
      type: 'boolean',
      example: true
    },
    esgoto_escorregamento: {
      type: 'boolean',
      example: true
    },
    erosao: {
      type: 'boolean',
      example: false
    },
    inundacao: {
      type: 'boolean',
      example: true
    },
    incendio: {
      type: 'boolean',
      example: false
    },
    arvores: {
      type: 'boolean',
      example: true
    },
    infiltracao_trinca: {
      type: 'boolean',
      example: true
    },
    judicial: {
      type: 'boolean',
      example: false
    },
    monitoramento: {
      type: 'boolean',
      example: false
    },
    transito: {
      type: 'boolean',
      example: false
    },
    outros: {
      type: 'string',
      example: 'Outro tipo não listado'
    }
  }
}