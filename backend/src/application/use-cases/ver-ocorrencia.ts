import { Ocorrencia } from "@application/entities/ocorrencia";
import { OcorrenciaRepository } from "@application/repositories/ocorrencia-repository";
import { Injectable } from "@nestjs/common";
import { OcorrenciasNotFound } from "./errors/OcorrenciasNotFound";

interface VerOcorrenciaRequest {
  tecnicoId: number
  ocorrenciaId: number
}

interface VerOcorrenciasResponse {
  ocorrencia: Ocorrencia
}


@Injectable()
export class VerOcorrencia {
  constructor(
    private ocorrenciaRepository: OcorrenciaRepository
  ) {}

  async execute(request: VerOcorrenciaRequest): Promise<VerOcorrenciasResponse> {
    const { tecnicoId, ocorrenciaId } = request;

    const ocorrencia = await this.ocorrenciaRepository.verUmaOcorrencia(ocorrenciaId, tecnicoId);

    if(!ocorrencia) {
      throw new OcorrenciasNotFound();
    }

    return {
      ocorrencia
    };
  }
}