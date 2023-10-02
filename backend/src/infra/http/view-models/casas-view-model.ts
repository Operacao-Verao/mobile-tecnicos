import { Casa } from "@application/entities/casa";

export class CasasViewModel {
    static toHTTP(casa: Casa) {
        return {
            id: casa.id,
            interdicao: casa.interdicao,
            complemento: casa.complemento,
        }
    }
}