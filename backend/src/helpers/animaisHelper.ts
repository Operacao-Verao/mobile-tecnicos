import { AnimaisBody } from "@infra/http/dtos/AnimaisBody";

export function animaisToNumber(animais: AnimaisBody) {
  return {
   caes: Number(animais.caes),
   gatos: Number(animais.gatos),
   aves: Number(animais.aves),
   equinos: Number(animais.equinos)
  }
}

export class AnimaisHelper {
  static toNumber(animais: AnimaisBody) {
    return {
     caes: Number(animais.caes),
     gatos: Number(animais.gatos),
     aves: Number(animais.aves),
     equinos: Number(animais.equinos)
    }
  }
}