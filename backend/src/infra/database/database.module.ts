import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { PrismaTecnicosRepository } from "./prisma/repositories/prisma-tecnicos-repository";
import { OcorrenciaRepository } from "@application/repositories/ocorrencia-repository";
import { PrismaOcorrenciaRepository } from "./prisma/repositories/prisma-ocorrencias-repository";
import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { PrismaRelatoriosRepository } from "./prisma/repositories/prisma-relatorios-repository";
import { CasaRepository } from "@application/repositories/casa-repository";
import { PrismaCasasRepository } from "./prisma/repositories/prisma-casas-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: TecnicosRepository,
      useClass: PrismaTecnicosRepository
    },
    {
      provide: OcorrenciaRepository,
      useClass: PrismaOcorrenciaRepository
    },
    {
      provide: RelatoriosRepository,
      useClass: PrismaRelatoriosRepository
    },
    {
      provide: CasaRepository,
      useClass: PrismaCasasRepository
    }
  ],
  exports: [
    TecnicosRepository,
    OcorrenciaRepository,
    RelatoriosRepository,
    CasaRepository
  ]
})
export class DatabaseModule {}