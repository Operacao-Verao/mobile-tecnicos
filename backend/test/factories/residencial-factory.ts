import { Residencial } from "@application/entities/residencial";
import { makeEndereco } from "./endereco-factory";
import { makeCasa } from "./casa-factory";
import { Casa } from "@application/entities/casa";

export function makeResidencial() {
    let casas: Casa[] = [makeCasa()];
    
    return new Residencial({
      endereco: makeEndereco(),
      numero: "123",
      casas
    }, 1);
}