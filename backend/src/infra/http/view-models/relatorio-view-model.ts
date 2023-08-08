import { Relatorio } from "@application/entities/relatorio";
import { AnimalViewModel } from "./animal-view-model";
import { AfetadosViewModel } from "./afetados-view-model";
import { DadosVistoriaViewModel } from "./dados-vistoria-view-model";

export class RelatorioViewModel {
  static toHTTP(relatorio: Relatorio) {
    return {
      id: relatorio.id,
      areaAfetada: relatorio.areaAfetada,
      assunto: relatorio.assunto,
      interdicao: relatorio.interdicao,
      situacaoVitimas: relatorio.situacaoVitimas,
      danosMateriais: relatorio.danosMateriais,
      dataAtendimento: relatorio.dataAtendimento,
      dataGeracao: relatorio.dataGeracao,
      encaminhamento: relatorio.encaminhamento,
      gravidade: relatorio.gravidade,
      memorando: relatorio.memorando,
      observacoes: relatorio.observacoes,
      oficio: relatorio.oficio,
      processo: relatorio.processo,
      relatorio: relatorio.relatorio,
      tipoConstrucao: relatorio.tipoConstrucao,
      tipoTalude: relatorio.tipoTalude,
      vegetacao: relatorio.vegetacao,
      fotos: relatorio.fotos,
      animais: AnimalViewModel.toHTTP(relatorio.animais),
      afetados: AfetadosViewModel.toHTTP(relatorio.afetados),
      dadosVistoria: DadosVistoriaViewModel.toHTTP(relatorio.dadosVistoria)
    }
  }
}