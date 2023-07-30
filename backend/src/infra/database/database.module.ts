import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { OcorrenciaRepository } from "@application/repositories/ocorrencia-repository";
import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { PrismaTecnicosRepository } from "./prisma/repositories/prisma-tecnicos-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: TecnicosRepository,
      useClass: PrismaTecnicosRepository
    }
  ],
  exports: [
    TecnicosRepository
  ]
})
export class DatabaseModule {}