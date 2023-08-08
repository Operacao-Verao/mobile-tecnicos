import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { Injectable } from "@nestjs/common";

interface ApagarFotoRequest {
  fotoId: number,
  relatorioId: number,
  tecnicoId: number
}

interface ApagarFotoResponse {
  mensagem: string
}

@Injectable()
export class ApagarFoto {
  constructor(
    private relatoriosRepository: RelatoriosRepository
  ) {}

  async execute(request: ApagarFotoRequest): Promise<ApagarFotoResponse> {
    const { relatorioId, tecnicoId, fotoId } = request;

    await this.relatoriosRepository.apagarFoto(fotoId, relatorioId, tecnicoId);

    return {
      mensagem: "Foto deletada com sucesso"
    }
  }
}