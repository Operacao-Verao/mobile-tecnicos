import { DadosVistoria } from "@application/entities/dadosVistoria";

export function makeDadosVistoria() {
    return new DadosVistoria({
        tipoVistoria: "Vistoria de teste para o sistema"
    })
}