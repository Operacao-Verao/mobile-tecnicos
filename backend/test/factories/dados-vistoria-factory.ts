import { DadosVistoria } from "@application/entities/dadosVistoria";

export function makeDadosVistoria() {
  return new DadosVistoria({
    arvores: true,
    deslizamento: true,
    desmoronamento: true,
    erosao: false,
    esgoto_escoamento: true,
    incendio: false,
    infiltracao_trinca: true,
    inundacao: true,
    judicial: false,
    monitoramento: false,
    transito: false,
    outros: ""
  })
}