import { Relatorio } from "@application/entities/relatorio";
import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { PrismaService } from "../prisma.service";
import { OcorrenciaNotFound } from "@application/use-cases/errors/OcorrenciaNotFound";
import { PrismaRelatorioMapper } from "../mappers/prisma-relatorio-mapper";
import { RelatorioNotFound } from "@application/use-cases/errors/RelatorioNotFound";
import { RelatoriosNotFound } from "@application/use-cases/errors/RelatoriosNotFound";

export class PrismaRelatoriosRepository implements RelatoriosRepository {
  constructor(
    private prisma: PrismaService
  ){}
  
  async criarRelatorio(relatorio: Relatorio, ocorrenciaId: number, tecnicoId: number): Promise<void> {
    const ocorrencia = await this.prisma.ocorrencia.findFirst({
      where: {
        AND: [
          {
            id: ocorrenciaId
          },
          {
            id_tecnico: tecnicoId
          }
        ],
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
  
  async alterarRelatorio(relatorio: Relatorio, ocorrenciaId: number, tecnicoId: number): Promise<void> {
    const ocorrencia = await this.prisma.ocorrencia.findFirst({
      where: {
        AND: [
          {
            id: ocorrenciaId
          },
          {
            id_tecnico: tecnicoId
          }
        ],
      },
      include: {
        Civil: true,
        Relatorio: true
      }
    });

    if(!ocorrencia) {
      throw new OcorrenciaNotFound();
    }

    let relatorioId: number | null = null;

    ocorrencia.Relatorio.map((item) => {
      if(item.id === relatorio.id) {
        relatorioId = relatorio.id;
      }
    });

    if(!relatorioId) {
      throw new RelatorioNotFound();
    }

    const raw = PrismaRelatorioMapper.toPrismaUpdate(relatorio, ocorrenciaId, ocorrencia.Civil.id_casa);

    await this.prisma.relatorio.update({
      where: {
        id: relatorio.id
      },
      data: raw
    });
  }

  async listarRelatoriosOcorrencia(ocorrenciaId: number, tecnicoId: number): Promise<Relatorio[]> {
    const ocorrencia = await this.prisma.ocorrencia.findFirst({
      where: {
        AND: [
          {
            id: ocorrenciaId
          },
          {
            id_tecnico: tecnicoId
          }
        ],
      },
      include: {
        Relatorio: {
          include: {
            Afetados: true,
            Animal: true,
            Casa: true,
            Foto: true
          }
        }
      }
    });

    if(!ocorrencia) {
      throw new RelatoriosNotFound();
    }

    return ocorrencia.Relatorio.map(PrismaRelatorioMapper.toHTTP);
  }

  async adicionarFoto(url: string, relatorioId: number, tecnicoId: number): Promise<void> {
    const relatorio = await this.prisma.relatorio.findFirst({
      where: {
        AND: [
          {
            id: relatorioId
          },
          {
            Ocorrencia: {
              id_tecnico: tecnicoId
            }
          }
        ]
      },
    });

    if(!relatorio) {
      throw new RelatorioNotFound();
    }

    await this.prisma.relatorio.update({
      where: {
        id: relatorio.id
      },
      data: {
        Foto: {
          create: {
            codificado: url
          }
        }
      }
    });
  }
}