import { Relatorio } from "@application/entities/relatorio";
import { makeAfetados } from "./afetados-factory";
import { makeAnimais } from "./animais-factory";
import { makeDadosVistoria } from "./dados-vistoria-factory";

export function makeRelatorios() {
    const dadosVistoria = makeDadosVistoria();
    const afetados = makeAfetados();
    const animais = makeAnimais();
    return new Relatorio({
        areaAfetada: 2,
        interdicao: 1,
        assunto: "Assunto desse relatório",
        danosMateriais: true,
        encaminhamento: "Foi para alguma secretaria",
        gravidade: 1,
        memorando: "56489",
        oficio: "Ofício de teste",
        vegetacao: 1,
        casaId: 1,
        tipoTalude: 2,
        observacoes: "Observações realizadas pelo técnico",
        tipoConstrucao: 1,
        situacaoVitimas: 2,
        relatorio: "Enchente na vilinha com queda e deslizamento",
        processo: "Dados do processo",
        dadosVistoria,
        fotos: [
            {
                url: 'base64'
            }
        ],
        afetados,
        animais,
        dataGeracao: new Date(),
        dataAtendimento: new Date()
    },
    1
    )
}