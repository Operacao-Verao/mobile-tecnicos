import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { Injectable } from "@nestjs/common";

interface RegistrarTokenRequest {
    tecnicoId: number,
    token: string
}

@Injectable()
export class RegistrarToken {
    constructor(
        private tecnicosRepository: TecnicosRepository    
    ) {}

    async execute(request: RegistrarTokenRequest): Promise<string> {
        const { tecnicoId, token } = request;

        const response = await this.tecnicosRepository.registrarToken(tecnicoId, token);

        return response;
    }
}