import { Relatorio } from "@application/entities/relatorio";
import { base64example } from "@helpers/base64";
import { makeAfetados } from "./afetados-factory";
import { makeAnimais } from "./animais-factory";

export function makeRelatorios() {
    return new Relatorio({
        areaAfetada: 2,
        assunto: "Assunto desse relatório",
        danosMateriais: true,
        encaminhamento: "Foi para alguma secretaria",
        enfermos: 1,
        gravidade: 1,
        memorando: "56489",
        oficio: "Ofício de teste",
        vegetacao: 1,
        tipoTalude: 2,
        observacoes: "Observações realizadas pelo técnico",
        tipoConstrucao: 1,
        situacaoVitimas: 2,
        relatorio: "Enchente na vilinha com queda e deslizamento",
        processo: "Dados do processo",
        interdicao: 1,
        fotos: [
            {
                url: base64example
            }
        ],
        afetados: makeAfetados(),
        animais: makeAnimais(),
        dataGeracao: new Date(),
        dataAtendimento: new Date()
    },
    1
    )
}