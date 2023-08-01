export class OcorrenciasNotFound extends Error {
    constructor() {
        super('Ocorrências não encontradas');
    }
}