import { Ocorrencia } from "@application/entities/ocorrencia";
import { Relatorio } from "@application/entities/relatorio";
import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { PrismaService } from "../prisma.service";
import { OcorrenciaNotFound } from "@application/use-cases/errors/OcorrenciaNotFound";
import { PrismaRelatorioMapper } from "../mappers/prisma-relatorio-mapper";

export class PrismaRelatoriosRepository implements RelatoriosRepository {
  constructor(
    private prisma: PrismaService
  ){}
  
  async criarRelatorio(relatorio: Relatorio, ocorrenciaId: number): Promise<void> {
    const ocorrencia = await this.prisma.ocorrencia.findUnique({
      where: {
        id: ocorrenciaId
      },
      include: {
        Civil: {
          include: {
            Endereco: {
              include: {
                Casa: true
              }
            }
          }
        }
      }
    });

    if(!ocorrencia) {
      throw new OcorrenciaNotFound();
    }

    const raw = PrismaRelatorioMapper.toPrisma(relatorio, ocorrenciaId, ocorrencia.Civil.id_casa);

    await this.prisma.relatorio.create({
      data: raw
    });
  }
  
  async alterarRelatorio(relatorio: Relatorio): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  async excluirRelatorio(relatorio: Relatorio): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async listarRelatoriosOcorrencia(ocorrencia: Ocorrencia): Promise<Relatorio[]> {
    throw new Error("Method not implemented.");
  }
  
}