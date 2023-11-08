import { Casa } from "@application/entities/casa";
import { RelatorioViewModel } from "./relatorio-view-model";

export class CasasViewModel {
    static toHTTP(casa: Casa) {
        return {
            id: casa.id,
            interdicao: casa.interdicao,
            complemento: casa.complemento,
            relatorios: casa.relatorios ? casa.relatorios.map(RelatorioViewModel.toHTTP) : [],
        }
    }
}