import { Animais } from "@application/entities/animais";

export class AnimalViewModel {
  static toHTTP(animal: Animais) {
    return {
      id: animal.id,
      aves: animal.aves,
      caes: animal.caes,
      gatos: animal.gatos,
      equinos: animal.equinos
    }
  }
}