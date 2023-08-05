export class OcorrenciaNotFound extends Error {
  constructor() {
      super('Ocorrência não encontrada');
  }
}