import { Relatorio } from "@application/entities/relatorio";

export class PrismaRelatorioMapper {
  static toPrisma(relatorio: Relatorio, ocorrenciaId: number, casaId: number) {
    return {
      area_afetada: relatorio.areaAfetada,
      assunto: relatorio.assunto,
      danos_materiais: relatorio.danosMateriais,
      data_atendimento: relatorio.dataAtendimento,
      data_geracao: relatorio.dataGeracao,
      encaminhamento: relatorio.encaminhamento,
      gravidade: relatorio.gravidade,
      memorando: relatorio.memorando,
      observacoes: relatorio.observacoes,
      oficio: relatorio.oficio,
      processo: relatorio.processo,
      interdicao: relatorio.interdicao,
      relatorio: relatorio.relatorio,
      tipo_construcao: relatorio.tipoConstrucao,
      tipo_talude: relatorio.tipoTalude,
      situacao_vitimas: relatorio.situacaoVitimas,
      vegetacao: relatorio.vegetacao,
      Afetados: {
        create: {
          adultos: relatorio.afetados.adultos,
          criancas: relatorio.afetados.criancas,
          enfermos: relatorio.afetados.enfermos,
          especiais: relatorio.afetados.especiais,
          feridos: relatorio.afetados.feridos,
          idosos: relatorio.afetados.idosos,
          mortos: relatorio.afetados.mortos
        }
      },
      Animal: {
        create: {
          aves: relatorio.animais.aves,
          caes: relatorio.animais.caes,
          gatos: relatorio.animais.gatos,
          equinos: relatorio.animais.equinos
        }
      },
      Casa: {
        connect: {
          id: 1
        }
      },
      Ocorrencia: {
        connect: {
          id: 1
        }
      }
    }
  }
}