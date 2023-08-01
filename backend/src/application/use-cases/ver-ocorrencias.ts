import { Ocorrencia } from "@application/entities/ocorrencia";
import { OcorrenciaRepository } from "@application/repositories/ocorrencia-repository";
import { OcorrenciasNotFound } from "./errors/OcorrenciasNotFound";
import { Injectable } from "@nestjs/common";


interface VerOcorrenciasRequest {
    tecnicoId: number
}

interface VerOcorrenciasResponse {
    ocorrencias: Ocorrencia[]
}

@Injectable()
export class VerOcorrencias {
    constructor(private ocorrenciaRepository: OcorrenciaRepository) {}

    async execute(request: VerOcorrenciasRequest): Promise<VerOcorrenciasResponse> {
        const { tecnicoId } = request;

        const ocorrencias = await this.ocorrenciaRepository.verOcorrencias(tecnicoId);

        if(!ocorrencias) {
            throw new OcorrenciasNotFound();
        }

        return {
            ocorrencias
        };
    }
}