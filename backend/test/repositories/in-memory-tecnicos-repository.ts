import { Tecnico } from "@application/entities/tecnico";
import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { TecnicoNotFound } from "@application/use-cases/errors/TecnicoNotFound";
import { makeTecnico } from "@test/factories/tecnicos-factory";

export class InMemoryTecnicosRepository implements TecnicosRepository {
  private tecnicos: Tecnico[] = [];
  
  async criarTecnico(): Promise<Tecnico> {
    const tecnico = makeTecnico()

    this.tecnicos.push(tecnico);
    return tecnico;
  }

  async registrarToken(id: number, token: string): Promise<string> {
    const criarTecnico = await this.criarTecnico();

    const tecnico = this.tecnicos.find((item) => item.id === criarTecnico.id);
    
    if(!tecnico) {
      throw new TecnicoNotFound();
    }

    for(let i = 0; i < this.tecnicos.length; i++) {
      if(this.tecnicos[i].id === criarTecnico.id) {
        criarTecnico.token = token;
        this.tecnicos[i] = criarTecnico;
      }
    }

    return "Token cadastrado com sucesso.";
  }

  async findByEmail(email: string): Promise<Tecnico> {
    throw new Error("Method not implemented.");
  }

  async findById(id: number): Promise<Tecnico> {
    throw new Error("Method not implemented.");
  }

}