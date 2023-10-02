import { Casa } from "@application/entities/casa";

export abstract class CasaRepository {
    abstract criarCasa(casa: Casa, residencialId: number): Promise<void>;   
}