export class RelatorioNotFound extends Error {
  constructor(){
    super('Relatório not found');
  }
}