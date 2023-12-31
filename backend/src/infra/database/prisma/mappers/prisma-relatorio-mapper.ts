import { Afetados } from "@application/entities/afetados";
import { Animais } from "@application/entities/animais";
import { DadosVistoria } from "@application/entities/dadosVistoria";
import { Relatorio } from "@application/entities/relatorio";
import { Relatorio as RawRelatorio, Afetados as RawAfetados, Animal as RawAnimal, Casa as RawCasa, Foto as RawFoto, DadosDaVistoria as RawDadosVistoria } from "@prisma/client";

interface RelatorioWithJoins extends RawRelatorio {
  Afetados: RawAfetados,
  Animal: RawAnimal,
  Casa: RawCasa,
  DadosDaVistoria: RawDadosVistoria,
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
      interdicao: relatorio.interdicao,
      gravidade: relatorio.gravidade,
      observacoes: relatorio.observacoes,
      assinatura_civil: relatorio.assinaturaCivil,
      assinatura_tecnico: relatorio.assinaturaTecnico,
      relatorio: relatorio.relatorio,
      tipo_construcao: relatorio.tipoConstrucao,
      tipo_talude: relatorio.tipoTalude,
      situacao_vitimas: relatorio.situacaoVitimas,
      vegetacao: relatorio.vegetacao,
      DadosDaVistoria: {
        create: {
          desmoronamento: relatorio.dadosVistoria.desmoronamento,
          deslizamento: relatorio.dadosVistoria.deslizamento,
          esgoto_escoamento: relatorio.dadosVistoria.esgoto_escoamento,
          erosao: relatorio.dadosVistoria.erosao,
          inundacao: relatorio.dadosVistoria.inundacao,
          incendio: relatorio.dadosVistoria.incendio,
          arvores: relatorio.dadosVistoria.arvores,
          infiltracao_trinca: relatorio.dadosVistoria.infiltracao_trinca,
          judicial: relatorio.dadosVistoria.judicial,
          monitoramento: relatorio.dadosVistoria.monitoramento,
          transito: relatorio.dadosVistoria.transito,
          outros: relatorio.dadosVistoria.outros
        }
      },
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
      gravidade: relatorio.gravidade,
      observacoes: relatorio.observacoes,
      relatorio: relatorio.relatorio,
      tipo_construcao: relatorio.tipoConstrucao,
      tipo_talude: relatorio.tipoTalude,
      situacao_vitimas: relatorio.situacaoVitimas,
      assinatura_civil: relatorio.assinaturaCivil,
      assinatura_tecnico: relatorio.assinaturaTecnico,
      vegetacao: relatorio.vegetacao,
      DadosDaVistoria: {
        update: {
          desmoronamento: relatorio.dadosVistoria.desmoronamento,
          deslizamento: relatorio.dadosVistoria.deslizamento,
          esgoto_escoamento: relatorio.dadosVistoria.esgoto_escoamento,
          erosao: relatorio.dadosVistoria.erosao,
          inundacao: relatorio.dadosVistoria.inundacao,
          incendio: relatorio.dadosVistoria.incendio,
          arvores: relatorio.dadosVistoria.arvores,
          infiltracao_trinca: relatorio.dadosVistoria.infiltracao_trinca,
          judicial: relatorio.dadosVistoria.judicial,
          monitoramento: relatorio.dadosVistoria.monitoramento,
          transito: relatorio.dadosVistoria.transito,
          outros: relatorio.dadosVistoria.outros
        }
      },
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
    const fotos = rawRelatorio.Foto ? PrismaRelatorioMapper.toHTTPFotos(rawRelatorio.Foto) : [];
    const afetados = rawRelatorio.Afetados ? PrismaRelatorioMapper.toHTTPAfetados(rawRelatorio.Afetados) : null;
    const animais = rawRelatorio.Animal ? PrismaRelatorioMapper.toHTTPAnimais(rawRelatorio.Animal) : null;
    const dadosVistoria = rawRelatorio.DadosDaVistoria ? PrismaRelatorioMapper.toHTTPDadosVistoria(rawRelatorio.DadosDaVistoria) : null;

    return new Relatorio({
      areaAfetada: rawRelatorio.area_afetada,
      casaId: rawRelatorio.id_casa,
      interdicao: rawRelatorio.interdicao,
      assunto: rawRelatorio.assunto,
      danosMateriais: rawRelatorio.danos_materiais,
      dataAtendimento: rawRelatorio.data_atendimento,
      dataGeracao: rawRelatorio.data_geracao,
      gravidade: rawRelatorio.gravidade,
      observacoes: rawRelatorio.observacoes,
      relatorio: rawRelatorio.relatorio,
      situacaoVitimas: rawRelatorio.situacao_vitimas,
      tipoConstrucao: rawRelatorio.tipo_construcao,
      tipoTalude: rawRelatorio.tipo_talude,
      vegetacao: rawRelatorio.vegetacao,
      assinaturaCivil: rawRelatorio.assinatura_civil,
      assinaturaTecnico: rawRelatorio.assinatura_tecnico,
      fotos,
      afetados,
      animais,
      dadosVistoria
    }, rawRelatorio.id);
  }

  private static toHTTPFotos(rawFoto?: RawFoto[]) {
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

  private static toHTTPDadosVistoria(rawDadosVistoria: RawDadosVistoria) {
    return new DadosVistoria({
      arvores: rawDadosVistoria.arvores,
      deslizamento: rawDadosVistoria.deslizamento,
      desmoronamento: rawDadosVistoria.desmoronamento,
      erosao: rawDadosVistoria.erosao,
      esgoto_escoamento: rawDadosVistoria.esgoto_escoamento,
      incendio: rawDadosVistoria.incendio,
      infiltracao_trinca: rawDadosVistoria.infiltracao_trinca,
      inundacao: rawDadosVistoria.inundacao,
      judicial: rawDadosVistoria.judicial,
      monitoramento: rawDadosVistoria.monitoramento,
      transito: rawDadosVistoria.transito,
      outros: rawDadosVistoria.outros
    })
  }
}