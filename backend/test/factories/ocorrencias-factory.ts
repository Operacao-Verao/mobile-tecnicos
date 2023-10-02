import { Ocorrencia } from "@application/entities/ocorrencia";
import { makeRelatorios } from "./relatorios-factory";
import { makeTecnico } from "./tecnicos-factory";
import { makeResidencial } from "./residencial-factory";

export function makeOcorrencias() {
    const relatorio = makeRelatorios();
    const tecnico = makeTecnico();
    const residencial = makeResidencial();

    return new Ocorrencia({
        acionamento: "Telefone",
        num_casas: 2,
        data: new Date(),
        relato: "Minha casa teve um deslizamento.",
        relatorios: [relatorio],
        tecnico,
        residencial,
        status: true
    })
}