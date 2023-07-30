import { Afetados } from "@application/entities/afetados";

export function makeAfetados() {
    return new Afetados({
        adultos: 3,
        criancas: 2,
        enfermos: 1,
        especiais: 0,
        feridos: 1,
        idosos: 1,
        mortos: 0
    }, 1);
}