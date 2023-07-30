import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Tecnico } from "@application/entities/tecnico";
import { PrismaTecnicoMapper } from "../mappers/prisma-tecnico-mapper";

@Injectable()
export class PrismaTecnicosRepository implements TecnicosRepository {
  constructor(private prisma: PrismaService) {}
  
  async findByEmail(email: string): Promise<Tecnico | null> {
    const tecnico = await this.prisma.funcionario.findUnique({
      where: {
        email: email
      }
    });

    if(!tecnico) {
      return null;
    }

    return PrismaTecnicoMapper.toDomain(tecnico);
  }
  
  async verDados(id: string): Promise<Tecnico> {
    throw new Error("Method not implemented.");
  }
}