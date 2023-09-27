import { Casa } from "@application/entities/casa";

export function makeCasa() {
    return new Casa({
      complemento: "perto de algum lugar",
      interdicao: 0
    }, 1);
}