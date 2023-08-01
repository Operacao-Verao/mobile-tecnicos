import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
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