import { Injectable } from "@nestjs/common";
import { CasaRepository } from "@application/repositories/casa-repository";
import { Casa } from "@application/entities/casa";
import { PrismaService } from "../prisma.service";
import { PrismaCasaMapper } from "../mappers/prisma-casa-mapper";

@Injectable()
export class PrismaCasasRepository implements CasaRepository {
    constructor(
        private prisma: PrismaService
    ) {}

    async criarCasa(casa: Casa, residencialId: number): Promise<void> {
        const raw = PrismaCasaMapper.toPrisma(casa, residencialId);

        await this.prisma.casa.create({
            data: raw
        });
    }
}