import { Relatorio } from "@application/entities/relatorio";
import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { Injectable } from "@nestjs/common";

interface VerRelatoriosOcorrenciaRequest {
  casaId: number
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
    const { casaId } = request;

    const relatorios = await this.relatoriosRepository.listarRelatoriosCasa(casaId);

    return {
      relatorios
    };
  }
}