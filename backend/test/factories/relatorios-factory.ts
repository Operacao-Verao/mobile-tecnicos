import { Relatorio } from "@application/entities/relatorio";
import { makeAfetados } from "./afetados-factory";
import { makeAnimais } from "./animais-factory";

export function makeRelatorios() {
    return new Relatorio({
        areaAfetada: "Área afetada de teste",
        assunto: "Assunto desse relatório",
        danosMateriais: true,
        encaminhamento: "Foi para alguma secretaria",
        enfermos: 1,
        gravidade: "Grave",
        memorando: "56489",
        oficio: "Ofício de teste",
        vegetacao: "Mato",
        tipoTalude: "Natural",
        observacoes: "Observações realizadas pelo técnico",
        tipoConstrucao: "Alvenaria",
        relatorio: "Enchente na vilinha com queda e deslizamento",
        processo: "Dados do processo",
        afetados: makeAfetados(),
        animais: makeAnimais(),
        dataGeracao: new Date(),
        dataAtendimento: new Date()
    },
    1
    )
}