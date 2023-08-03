import { AfetadosBody } from "@infra/http/dtos/AfetadosBody";

export class AfetadosHelper {
  static toNumber(afetados: AfetadosBody) {
    return {
      adultos: Number(afetados.adultos),
      criancas: Number(afetados.criancas),
      enfermos: Number(afetados.enfermos),
      especiais: Number(afetados.especiais),
      feridos: Number(afetados.feridos),
      idosos: Number(afetados.idosos),
      mortos: Number(afetados.mortos),
     }
  }
}