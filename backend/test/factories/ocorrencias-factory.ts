import { Ocorrencia } from "@application/entities/ocorrencia";
import { makeRelatorios } from "./relatorios-factory";
import { makeTecnico } from "./tecnicos-factory";
import { makeEndereco } from "./endereco-factory";

export function makeOcorrencias() {
    const relatorio = makeRelatorios();
    const tecnico = makeTecnico();
    const endereco = makeEndereco();

    return new Ocorrencia({
        acionamento: "Telefone",
        num_casas: 2,
        data: new Date(),
        relato: "Minha casa teve um deslizamento.",
        relatorios: [relatorio],
        tecnico,
        endereco,
        status: true
    })
}