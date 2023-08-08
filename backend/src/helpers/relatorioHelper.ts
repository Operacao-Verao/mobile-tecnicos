import { AfetadosBody } from "@infra/http/dtos/AfetadosBody";
import { AnimaisBody } from "@infra/http/dtos/AnimaisBody";
import { RelatorioBody } from "@infra/http/dtos/RelatorioBody";

export class RelatorioHelper {
    static toNumber(relatorio: RelatorioBody) {
        const animais = this.AnimalToNumber(relatorio.animais);
        const afetados = this.AfetadosToNumber(relatorio.afetados);
        const dataAtendimentoToDate = new Date(relatorio.dataAtendimento);
        const dataGeracaoToDate = new Date(relatorio.dataGeracao);
        const { enfermos, interdicao, situacaoVitimas, gravidade, areaAfetada, tipoConstrucao, dataAtendimento, dataGeracao, tipoTalude, vegetacao, ...rest } = relatorio;

        const resposta = {
            animais,
            afetados,
            dataAtendimento: dataAtendimentoToDate,
            dataGeracao: dataGeracaoToDate,
            enfermos: enfermos,
            interdicao: interdicao,
            situacaoVitimas: situacaoVitimas,
            gravidade: gravidade,
            areaAfetada: areaAfetada,
            tipoConstrucao: tipoConstrucao,
            tipoTalude: tipoTalude,
            vegetacao: vegetacao,
            ...rest
        };

        return resposta;
    }

    private static AnimalToNumber(animais: AnimaisBody) {
        return {
            caes: Number(animais.caes),
            gatos: Number(animais.gatos),
            aves: Number(animais.aves),
            equinos: Number(animais.equinos)
        }
    }

    private static AfetadosToNumber(afetados: AfetadosBody) {
        return {
            adultos: Number(afetados.adultos),
            criancas: Number(afetados.criancas),
            enfermos: Number(afetados.enfermos),
            especiais: Number(afetados.especiais),
            feridos: Number(afetados.feridos),
            idosos: Number(afetados.idosos),
            mortos: Number(afetados.mortos),
        }
    }
}