import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { PrismaTecnicosRepository } from "./prisma/repositories/prisma-tecnicos-repository";
import { OcorrenciaRepository } from "@application/repositories/ocorrencia-repository";
import { PrismaOcorrenciaRepository } from "./prisma/repositories/prisma-ocorrencias-repository";

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
    }
  ],
  exports: [
    TecnicosRepository,
    OcorrenciaRepository
  ]
})
export class DatabaseModule {}