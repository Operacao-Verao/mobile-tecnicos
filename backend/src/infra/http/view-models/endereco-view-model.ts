import { Endereco } from "@application/entities/endereco";

export class EnderecoViewModel {
  static toHTTP(endereco: Endereco) {
    return {
      cep: endereco.cep,
      bairro: endereco.bairro,
      cidade: endereco.cidade,
      rua: endereco.rua
    }
  }
}