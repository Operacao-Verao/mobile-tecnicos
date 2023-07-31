export class TecnicoNotFound extends Error {
  constructor() {
    super('Técnico not found.');
  }
}