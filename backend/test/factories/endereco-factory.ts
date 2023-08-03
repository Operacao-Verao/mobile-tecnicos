import { Endereco } from "@application/entities/endereco";

export function makeEndereco() {
  return new Endereco({
    bairro: "Vilinha",
    cep: "00000-000",
    cidade: "Franco da Rocha",
    rua: "Rua da Vilinha"
  })
}