import { DadosVistoria } from "@application/entities/dadosVistoria";

export class DadosVistoriaViewModel {
  static toHTTP(dadosVistoria: DadosVistoria) {
    return {
      desmoronamento: dadosVistoria.desmoronamento,
      deslizamento: dadosVistoria.deslizamento,
      esgoto_escoamento: dadosVistoria.esgoto_escoamento,
      erosao: dadosVistoria.erosao,
      inundacao: dadosVistoria.inundacao,
      incendio: dadosVistoria.incendio,
      arvores: dadosVistoria.arvores,
      infiltracao_trinca: dadosVistoria.infiltracao_trinca,
      judicial: dadosVistoria.judicial,
      monitoramento: dadosVistoria.monitoramento,
      transito: dadosVistoria.transito,
      outros: dadosVistoria.outros
    }
  }
}