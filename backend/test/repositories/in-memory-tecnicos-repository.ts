import { Tecnico } from "@application/entities/tecnico";
import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { makeTecnico } from "@test/factories/tecnicos-factory";

export class InMemoryTecnicosRepository implements TecnicosRepository {
  private tecnicos: Tecnico[] = [];
  
  async criarTecnico(): Promise<Tecnico> {
    const tecnico = makeTecnico()

    this.tecnicos.push(tecnico);
    return tecnico;
  }

  async findByEmail(email: string): Promise<Tecnico> {
    throw new Error("Method not implemented.");
  }

  async findById(id: number): Promise<Tecnico> {
    throw new Error("Method not implemented.");
  }

}