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
      situacaoVitimas: relatorio.situacaoVitimas,
      danosMateriais: relatorio.danosMateriais,
      dataAtendimento: relatorio.dataAtendimento,
      dataGeracao: relatorio.dataGeracao,
      gravidade: relatorio.gravidade,
      observacoes: relatorio.observacoes,
      relatorio: relatorio.relatorio,
      tipoConstrucao: relatorio.tipoConstrucao,
      tipoTalude: relatorio.tipoTalude,
      vegetacao: relatorio.vegetacao,
      fotos: relatorio.fotos,
      animais: relatorio.animais ? AnimalViewModel.toHTTP(relatorio.animais) : {},
      afetados: relatorio.afetados ? AfetadosViewModel.toHTTP(relatorio.afetados)  : {},
      dadosVistoria: relatorio.dadosVistoria ? DadosVistoriaViewModel.toHTTP(relatorio.dadosVistoria)  : {}
    }
  }
}