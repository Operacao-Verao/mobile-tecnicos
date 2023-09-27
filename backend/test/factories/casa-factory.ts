import { Casa } from "@application/entities/casa";
import { makeResidencial } from "./residencial-factory";

export function makeCasa() {
    return new Casa({
      residencial: makeResidencial(),
      complemento: "perto de algum lugar",
      interdicao: 0
    }, 1);
}