import { Residencial } from "@application/entities/residencial";
import { CasasViewModel } from "./casas-view-model";

export class EnderecoViewModel {
  static toHTTP(residencial: Residencial) {
    return {
      cep: residencial.endereco.cep,
      bairro: residencial.endereco.bairro,
      cidade: residencial.endereco.cidade,
      rua: residencial.endereco.rua,
      numero: residencial.numero,
      casas: residencial.casas.map(CasasViewModel.toHTTP)
    }
  }
}