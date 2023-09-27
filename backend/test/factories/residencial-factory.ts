import { Residencial } from "@application/entities/residencial";
import { makeEndereco } from "./endereco-factory";

export function makeResidencial() {
    return new Residencial({
      endereco: makeEndereco(),
      numero: "123"
    }, 1);
}