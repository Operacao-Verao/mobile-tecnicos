import { Relatorio } from "@application/entities/relatorio";
import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { PrismaService } from "../prisma.service";
import { OcorrenciaNotFound } from "@application/use-cases/errors/OcorrenciaNotFound";
import { PrismaRelatorioMapper } from "../mappers/prisma-relatorio-mapper";
import { RelatorioNotFound } from "@application/use-cases/errors/RelatorioNotFound";
import { RelatoriosNotFound } from "@application/use-cases/errors/RelatoriosNotFound";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaRelatoriosRepository implements RelatoriosRepository {
  constructor(
    private prisma: PrismaService
  ){}
  
  async criarRelatorio(relatorio: Relatorio, ocorrenciaId: number, tecnicoId: number, casaId: number): Promise<void> {
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
            Residencial: true
          }
        }
      }
    });

    if(!ocorrencia) {
      throw new OcorrenciaNotFound();
    }

    const raw = PrismaRelatorioMapper.toPrisma(relatorio, ocorrenciaId, casaId);

    await this.prisma.relatorio.create({
      data: raw
    });

    await this.prisma.casa.update({
      where: {
        id: casaId
      },
      data: {
        interdicao: relatorio.interdicao
      }
    });
  }
  
  async alterarRelatorio(relatorio: Relatorio, ocorrenciaId: number, tecnicoId: number, casaId: number): Promise<void> {
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

    const raw = PrismaRelatorioMapper.toPrismaUpdate(relatorio, ocorrenciaId, casaId);

    await this.prisma.relatorio.update({
      where: {
        id: relatorio.id
      },
      data: raw
    });
  }

  async listarRelatoriosCasa(casaId: number): Promise<Relatorio[]> {
    const relatorios = await this.prisma.relatorio.findMany({
      where: {
        AND: [
          {
            Casa: 
            {
              id: casaId
            }
          }
        ]
      },
      include: {
        Afetados: true,
        Animal: true,
        Casa: true,
        DadosDaVistoria: true,
        Foto: true,
        Memo: true
      }
    });

    if(!relatorios) {
      throw new RelatoriosNotFound();
    }

    return relatorios.map(PrismaRelatorioMapper.toHTTP);
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

  async apagarFoto(fotoId: number, relatorioId: number, tecnicoId: number): Promise<void> {
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
          },
          {
            Foto: {
              some: {
                id: fotoId
              }
            }
          }
        ]
      },
    });

    if(!relatorio) {
      throw new RelatorioNotFound();
    }

    await this.prisma.foto.delete({
      where: {
        id: fotoId
      }
    });
  }
}