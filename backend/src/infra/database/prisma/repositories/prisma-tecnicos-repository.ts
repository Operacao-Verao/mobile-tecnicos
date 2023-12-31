import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Tecnico } from "@application/entities/tecnico";
import { PrismaTecnicoMapper } from "../mappers/prisma-tecnico-mapper";
import { TokenError } from "@application/use-cases/errors/TokenError";

@Injectable()
export class PrismaTecnicosRepository implements TecnicosRepository {
  constructor(private prisma: PrismaService) {}
  
  async findById(id: number): Promise<Tecnico | null> {
    
    const tecnico = await this.prisma.tecnico.findFirst({
      where: {
        id
      },
      include: {
        Funcionario: true
      }
    });

    if(!tecnico) {
      return null;
    }

    return PrismaTecnicoMapper.toDomain(tecnico);
  }

  async findByEmail(email: string): Promise<Tecnico | null> {
    const funcionario = await this.prisma.funcionario.findUnique({
      where: {
        email: email
      },
      include: {
        Tecnico: true
      }
    });

    if(!funcionario?.Tecnico) {
      return null;
    }

    return PrismaTecnicoMapper.toDomain({id: funcionario.Tecnico.id, id_funcionario: funcionario.id, ativo: funcionario.Tecnico.ativo, Funcionario: funcionario, token: funcionario.Tecnico.token});
  }

  async registrarToken(id: number, token: string): Promise<string> {
    const tecnico = await this.prisma.tecnico.findFirst({
      where: {
        id
      },
      include: {
        Funcionario: true
      }
    });

    if(!tecnico) {
      throw new TokenError();
    }

    await this.prisma.tecnico.update({
      where: {
        id
      },
      data: {
        token
      }
    });

    return "Token cadastrado com sucesso!";
  }
}