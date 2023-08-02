import { Ocorrencia } from "@application/entities/ocorrencia";
import { OcorrenciaRepository } from "@application/repositories/ocorrencia-repository";
import { Injectable } from "@nestjs/common";
import { OcorrenciasNotFound } from "./errors/OcorrenciasNotFound";

interface FiltrarOcorrenciaRequest {
  dataHora?: Date,
  tecnicoId: number
}

interface FiltrarOcorrenciaResponse {
  ocorrencias: Ocorrencia[]
}

@Injectable()
export class FiltrarOcorrencia {
  constructor(
    private ocorrenciaRepository: OcorrenciaRepository
  ) {}

  async execute(request: FiltrarOcorrenciaRequest): Promise<FiltrarOcorrenciaResponse> {
    const { dataHora, tecnicoId } = request;

    const ocorrencias = await this.ocorrenciaRepository.filtrarPorStatus(dataHora, tecnicoId);

    if(!ocorrencias) {
      throw new OcorrenciasNotFound();
    }

    return {
      ocorrencias
    };
  }
}