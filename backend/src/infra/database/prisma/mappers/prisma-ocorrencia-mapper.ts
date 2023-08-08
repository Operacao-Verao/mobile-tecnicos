import { Afetados } from '@application/entities/afetados'
import { Animais } from '@application/entities/animais'
import { DadosVistoria } from '@application/entities/dadosVistoria'
import { Endereco } from '@application/entities/endereco'
import { Ocorrencia } from '@application/entities/ocorrencia'
import { Relatorio } from '@application/entities/relatorio'
import { Tecnico } from '@application/entities/tecnico'
import { Ocorrencia as RawOcorrencia, Relatorio as RawRelatorio, Tecnico as RawTecnico, Funcionario as RawFuncionario, Animal as RawAnimal, Afetados as RawAfetados, Civil as RawCivil, Endereco as RawEndereco, Foto as RawFoto, DadosDaVistoria as RawDadosVistoria } from '@prisma/client'

interface RawCivilWithJoins extends RawCivil {
  Endereco: RawEndereco
}

interface RawTecnicoWithJoins extends RawTecnico {
  Funcionario: RawFuncionario
}

interface RawRelatorioWithJoins extends RawRelatorio {
  Animal: RawAnimal,
  Afetados: RawAfetados, 
  DadosDaVistoria: RawDadosVistoria,
  Foto: RawFoto[]
}

interface RawOcorrenciasWithJoins extends RawOcorrencia {
  Tecnico: RawTecnicoWithJoins,
  Relatorio: RawRelatorioWithJoins[],
  Civil: RawCivilWithJoins
}

export class PrismaOcorrenciaMapper {
  static toDomain(rawOcorrencia: RawOcorrenciasWithJoins) {
    let relatorios: Relatorio[] = [];

    rawOcorrencia.Relatorio.map((item) => {
      const fotos = this.toHTTPFotos(item.Foto);
      const afetados = this.toHTTPAfetados(item.Afetados);
      const animais = this.toHTTPAnimais(item.Animal);
      const dadosVistoria = this.toHTTPDadosVistoria(item.DadosDaVistoria);

      const relatorio = new Relatorio({
        areaAfetada: item.area_afetada,
        assunto: item.assunto,
        interdicao: item.interdicao,
        situacaoVitimas: item.situacao_vitimas,
        danosMateriais: item.danos_materiais,
        dataAtendimento: item.data_atendimento,
        dataGeracao: item.data_geracao,
        encaminhamento: item.encaminhamento,
        gravidade: item.gravidade,
        memorando: item.memorando,
        observacoes: item.observacoes,
        oficio: item.oficio,
        processo: item.processo,
        relatorio: item.relatorio,
        tipoConstrucao: item.tipo_construcao,
        tipoTalude: item.tipo_talude,
        vegetacao: item.vegetacao,
        fotos,
        animais,
        afetados,
        dadosVistoria
      }, item.id);

      relatorios.push(relatorio);
    })
    
    const tecnico = this.toHTTPTecnico(rawOcorrencia.Tecnico);

    const endereco = this.toHTTPEndereco(rawOcorrencia.Civil.Endereco);

    return new Ocorrencia({
      acionamento: rawOcorrencia.acionamento,
      data: rawOcorrencia.data_ocorrencia,
      num_casas: rawOcorrencia.num_casas,
      relato: rawOcorrencia.relato_civil,
      status: rawOcorrencia.aprovado,
      tecnico,
      endereco,
      relatorios
    }, rawOcorrencia.id)
  }

  static toPrismaSearch(dataHora: Date, tecnicoId: number) {
    const andStatement: any = [];

    if(tecnicoId) {
      andStatement.push(
        {
          idTecnico: tecnicoId
        },
      );
    }

    if(dataHora) {
      andStatement.push(
        {
          dataOcorrencia: {
              lte: dataHora
          }
        }
      );
    }

    return andStatement;
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

  private static toHTTPTecnico(rawTecnico: RawTecnicoWithJoins) {
    return new Tecnico({
      email: rawTecnico.Funcionario.email,
      nome:rawTecnico.Funcionario.nome,
      senha:rawTecnico.Funcionario.senha
    }, rawTecnico.id);
  }

  private static toHTTPEndereco(rawEndereco: RawEndereco) {
    return new Endereco({
      cep: rawEndereco.cep,
      bairro: rawEndereco.bairro,
      cidade: rawEndereco.cidade,
      rua: rawEndereco.rua
    });
  }
}