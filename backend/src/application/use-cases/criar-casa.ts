import { Injectable } from "@nestjs/common";
import { CasaRepository } from "@application/repositories/casa-repository";
import { Casa } from "@application/entities/casa";

interface CriarCasaRequest {
    interdicao: number,
    complemento: string,
    id_residencial: number
}

interface CriarCasaResponse {
    casa: Casa
}

@Injectable()
export class CriarCasa {
    constructor(
        private casaRepository: CasaRepository
    ) {}

    async execute(request: CriarCasaRequest): Promise<CriarCasaResponse> {
        const { interdicao, complemento, id_residencial } = request;

        const casa = new Casa({
            interdicao,
            complemento
        });

        await this.casaRepository.criarCasa(casa, id_residencial);

        return {
            casa
        };
    }
}