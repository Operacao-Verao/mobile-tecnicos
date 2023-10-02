import { Casa } from "@application/entities/casa";
import { CasaRepository } from "@application/repositories/casa-repository";

export class InMemoryCasasRepository implements CasaRepository {
  public casas: Casa[] = [];

  async criarCasa(casa: Casa, residencialId: number): Promise<void> {
    this.casas.push(casa);
  }
  
}