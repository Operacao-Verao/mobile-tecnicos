import { Afetados } from "@application/entities/afetados";

export class AfetadosViewModel {
  static toHTTP(afetados: Afetados) {
    return {
      id: afetados.id,
      adultos: afetados.adultos,
      criancas: afetados.criancas,
      enfermos: afetados.enfermos,
      especiais: afetados.especiais,
      feridos: afetados.feridos,
      idosos: afetados.idosos,
      mortos: afetados.mortos
    }
  }
}