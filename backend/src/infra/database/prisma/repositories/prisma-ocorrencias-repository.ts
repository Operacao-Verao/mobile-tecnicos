import { OcorrenciaRepository } from "@application/repositories/ocorrencia-repository";
import { PrismaService } from "../prisma.service";
import { Ocorrencia } from "@application/entities/ocorrencia";
import { Injectable } from "@nestjs/common";
import { PrismaOcorrenciaMapper } from "../mappers/prisma-ocorrencia-mapper";
import { OcorrenciasNotFound } from "@application/use-cases/errors/OcorrenciasNotFound";

@Injectable()
export class PrismaOcorrenciaRepository implements OcorrenciaRepository {
    constructor(private prisma: PrismaService) {}

    async verOcorrencias(tecnicoId: number): Promise<Ocorrencia[]> {
        const ocorrencias = await this.prisma.ocorrencia.findMany({
            where: {
                idTecnico: tecnicoId
            },
            include: {
                Tecnico: {
                    include: {
                        Funcionario: true
                    }
                },
                Relatorio: true
            },
            orderBy: {
                dataOcorrencia: 'desc'
            }
        });

        if(!ocorrencias) {
            throw new OcorrenciasNotFound();
        }

        return ocorrencias.map(PrismaOcorrenciaMapper.toDomain);
    }

    async verUmaOcorrencia(id: number, tecnicoId: number): Promise<Ocorrencia> {
        const ocorrencia = await this.prisma.ocorrencia.findFirst({
            where: {
                AND: [
                    {
                        id
                    },
                    {
                        idTecnico: tecnicoId
                    }
                ]

            },
            include: {
                Tecnico: {
                    include: {
                        Funcionario: true
                    }
                },
                Relatorio:  {
                    include: {
                        Afetados: true,
                        Animal: true
                    }
                },
                Civil: {
                    include: {
                        Endereco: true
                    }
                }
            },
            orderBy: {
                dataOcorrencia: 'desc'
            }
        });

        if(!ocorrencia) {
            throw new OcorrenciasNotFound();
        }
        
        return PrismaOcorrenciaMapper.toDomain(ocorrencia);
    }

    async filtrarPorStatus(dataHora: Date, tecnicoId: number): Promise<Ocorrencia[]> {
        const andStatement = PrismaOcorrenciaMapper.toPrismaSearch(dataHora, tecnicoId);

        const ocorrencias = await this.prisma.ocorrencia.findMany({
            where: {
                AND: [
                    andStatement
                ]
            },
            include: {
                Tecnico: {
                    include: {
                        Funcionario: true
                    }
                },
                Relatorio:  {
                    include: {
                        Afetados: true,
                        Animal: true
                    }
                },
                Civil: {
                    include: {
                        Endereco: true
                    }
                }
            },
            orderBy: {
                dataOcorrencia: 'desc'
            }
        });

        if(!ocorrencias) {
            throw new OcorrenciasNotFound();
        }
        
        return ocorrencias.map(PrismaOcorrenciaMapper.toDomain);
    }
}