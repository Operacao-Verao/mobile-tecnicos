import { Casa } from "@application/entities/casa";

export class PrismaCasaMapper {
    static toPrisma(casa: Casa, idResidencial: number) {
        return {
            interdicao: casa.interdicao,
            complemento: casa.complemento,
            id_residencial: idResidencial
        };
    }
}