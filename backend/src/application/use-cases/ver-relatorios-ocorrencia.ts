import { Relatorio } from "@application/entities/relatorio";
import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { Injectable } from "@nestjs/common";

interface VerRelatoriosOcorrenciaRequest {
  ocorrenciaId: number,
  tecnicoId: number
}

interface VerRelatoriosOcorrenciaResponse {
  relatorios: Relatorio[]
}

@Injectable()
export class VerRelatoriosOcorrencia {
  constructor(
    private relatoriosRepository: RelatoriosRepository
  ){}

  async execute(request: VerRelatoriosOcorrenciaRequest): Promise<VerRelatoriosOcorrenciaResponse> {
    const { ocorrenciaId, tecnicoId } = request;

    const relatorios = await this.relatoriosRepository.listarRelatoriosOcorrencia(ocorrenciaId, tecnicoId);

    return {
      relatorios
    };
  }
}