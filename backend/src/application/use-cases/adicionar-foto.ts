import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { Injectable } from "@nestjs/common";

interface AdicionarFotoRequest {
  url: string,
  relatorioId: number,
  tecnicoId: number
}

interface AdicionarFotoResponse {
  url: string
}

@Injectable()
export class AdicionarFoto {
  constructor(
    private relatoriosRepository: RelatoriosRepository
  ) {}

  async execute(request: AdicionarFotoRequest): Promise<AdicionarFotoResponse> {
    const { relatorioId, tecnicoId, url } = request;

    await this.relatoriosRepository.adicionarFoto(url, relatorioId, tecnicoId);

    return {
      url
    }
  }
}