import { Afetados } from "@application/entities/afetados";
import { Animais } from "@application/entities/animais";
import { Relatorio } from "@application/entities/relatorio";
import { Relatorio as RawRelatorio, Afetados as RawAfetados, Animal as RawAnimal, Casa as RawCasa, Foto as RawFoto } from "@prisma/client";

interface RelatorioWithJoins extends RawRelatorio {
  Afetados: RawAfetados,
  Animal: RawAnimal,
  Casa: RawCasa,
  Foto: RawFoto[]
}

export class PrismaRelatorioMapper {
  static toPrisma(relatorio: Relatorio, ocorrenciaId: number, casaId: number) {
    let data: {codificado: string}[] = [];
  
    relatorio.fotos.map((item) => {
      data.push({
        codificado: item.url
      });
    });

    const prisma = {
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
          id: casaId
        }
      },
      Ocorrencia: {
        connect: {
          id: ocorrenciaId
        }
      },
      Foto: {
        createMany: {
          data
        }
      }
    }
    
    return prisma;
  }

  static toPrismaUpdate(relatorio: Relatorio, ocorrenciaId: number, casaId: number) {
    const prisma = {
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
        update: {
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
        update: {
          aves: relatorio.animais.aves,
          caes: relatorio.animais.caes,
          gatos: relatorio.animais.gatos,
          equinos: relatorio.animais.equinos
        }
      },
      Casa: {
        connect: {
          id: casaId
        }
      },
      Ocorrencia: {
        connect: {
          id: ocorrenciaId
        }
      }
    }
    
    return prisma;
  }

  static toHTTP(rawRelatorio: RelatorioWithJoins) {
    const fotos = this.toHTTPFotos(rawRelatorio.Foto);
    const afetados = this.toHTTPAfetados(rawRelatorio.Afetados);
    const animais = this.toHTTPAnimais(rawRelatorio.Animal);

    return new Relatorio({
      areaAfetada: rawRelatorio.area_afetada,
      assunto: rawRelatorio.assunto,
      danosMateriais: rawRelatorio.danos_materiais,
      dataAtendimento: rawRelatorio.data_atendimento,
      dataGeracao: rawRelatorio.data_geracao,
      encaminhamento: rawRelatorio.encaminhamento,
      gravidade: rawRelatorio.gravidade,
      interdicao: rawRelatorio.interdicao,
      memorando: rawRelatorio.memorando,
      observacoes: rawRelatorio.observacoes,
      oficio: rawRelatorio.oficio,
      processo: rawRelatorio.processo,
      relatorio: rawRelatorio.relatorio,
      situacaoVitimas: rawRelatorio.situacao_vitimas,
      tipoConstrucao: rawRelatorio.tipo_construcao,
      tipoTalude: rawRelatorio.tipo_talude,
      vegetacao: rawRelatorio.vegetacao,
      fotos,
      afetados,
      animais
    }, rawRelatorio.id);
  }

  private static toHTTPFotos(rawFoto: RawFoto[]) {
    let fotos: {url: string}[] = [];

    rawFoto.map((item) => {
      fotos.push({
        url: item.codificado
      })
    });

    return fotos;
  }

  private static toHTTPAfetados(rawAfetados: RawAfetados) {
    return new Afetados({
      adultos: rawAfetados.adultos,
      criancas: rawAfetados.criancas,
      enfermos: rawAfetados.enfermos,
      especiais: rawAfetados.especiais,
      feridos: rawAfetados.feridos,
      idosos: rawAfetados.idosos,
      mortos: rawAfetados.mortos
    }, rawAfetados.id);
  }

  private static toHTTPAnimais(rawAnimal: RawAnimal) {
    return new Animais({
      aves: rawAnimal.aves,
      caes: rawAnimal.caes,
      gatos: rawAnimal.gatos,
      equinos: rawAnimal.equinos
    }, rawAnimal.id);
  }
}