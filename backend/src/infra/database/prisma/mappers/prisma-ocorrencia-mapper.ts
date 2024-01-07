import { Afetados } from '@application/entities/afetados'
import { Animais } from '@application/entities/animais'
import { Casa } from '@application/entities/casa'
import { DadosVistoria } from '@application/entities/dadosVistoria'
import { Endereco } from '@application/entities/endereco'
import { Ocorrencia } from '@application/entities/ocorrencia'
import { Relatorio } from '@application/entities/relatorio'
import { Residencial } from '@application/entities/residencial'
import { Tecnico } from '@application/entities/tecnico'
import { Ocorrencia as RawOcorrencia, Relatorio as RawRelatorio, Tecnico as RawTecnico, Funcionario as RawFuncionario, Animal as RawAnimal, Afetados as RawAfetados, Civil as RawCivil, Endereco as RawEndereco, Foto as RawFoto, DadosDaVistoria as RawDadosVistoria, Residencial as RawResidencial, Casa as RawCasa } from '@prisma/client'

interface RawRelatorioWithJoins extends RawRelatorio {
  Animal: RawAnimal,
  Afetados: RawAfetados, 
  DadosDaVistoria: RawDadosVistoria,
  Foto: RawFoto[]
}

interface RawCasaWithJoins extends RawCasa {
  Relatorio: RawRelatorioWithJoins[]
}

interface ResidencialWithJoins extends RawResidencial {
  Endereco: RawEndereco,
  Casa: RawCasaWithJoins[]
}

interface RawCivilWithJoins extends RawCivil {
  Residencial: ResidencialWithJoins
}

interface RawTecnicoWithJoins extends RawTecnico {
  Funcionario: RawFuncionario
}

interface RawOcorrenciasWithJoins extends RawOcorrencia {
  Tecnico: RawTecnicoWithJoins,
  Relatorio: RawRelatorioWithJoins[],
  Civil: RawCivilWithJoins
}

export class PrismaOcorrenciaMapper {
  static toDomain(rawOcorrencia: RawOcorrenciasWithJoins) {
    const tecnico = PrismaOcorrenciaMapper.toHTTPTecnico(rawOcorrencia.Tecnico);

    const endereco = PrismaOcorrenciaMapper.toHTTPEndereco(rawOcorrencia.Civil.Residencial.Endereco);

    let casas = PrismaOcorrenciaMapper.toHTTPCasas(rawOcorrencia.Civil.Residencial.Casa);

    const residencial = PrismaOcorrenciaMapper.toHTTPResidencial(rawOcorrencia.Civil.Residencial, endereco, casas);

    return new Ocorrencia({
      acionamento: rawOcorrencia.acionamento,
      data: rawOcorrencia.data_ocorrencia,
      num_casas: rawOcorrencia.num_casas,
      relato: rawOcorrencia.relato_civil,
      status: rawOcorrencia.aprovado,
      tecnico,
      residencial
    }, rawOcorrencia.id)
  }

  static toPrismaSearch(dataHora: Date, tecnicoId: number) {
    const andStatement: any = [];
    
    if(tecnicoId) {
      andStatement.push(
        {
          id_tecnico: tecnicoId
        },
      );
    }

    if(dataHora) {
      andStatement.push(
        {
          data_ocorrencia: {
              lte: dataHora.toISOString()
          }
        }
      );
    }

    return andStatement;
  }

  static toHTTPFotos(rawFoto: RawFoto[]) {
    let fotos: {url: string}[] = [];

    rawFoto.map((item) => {
      fotos.push({
        url: item.codificado
      })
    });

    return fotos;
  }

  static toHTTPAfetados(rawAfetados: RawAfetados) {
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

  static toHTTPAnimais(rawAnimal: RawAnimal) {
    return new Animais({
      aves: rawAnimal.aves,
      caes: rawAnimal.caes,
      gatos: rawAnimal.gatos,
      equinos: rawAnimal.equinos
    }, rawAnimal.id);
  }

  static toHTTPDadosVistoria(rawDadosVistoria: RawDadosVistoria) {
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

  static toHTTPTecnico(rawTecnico: RawTecnicoWithJoins) {
    return new Tecnico({
      email: rawTecnico.Funcionario.email,
      nome:rawTecnico.Funcionario.nome,
      senha:rawTecnico.Funcionario.senha
    }, rawTecnico.id);
  }

  static toHTTPEndereco(rawEndereco: RawEndereco) {
    return new Endereco({
      cep: rawEndereco.cep,
      bairro: rawEndereco.bairro,
      cidade: rawEndereco.cidade,
      rua: rawEndereco.rua
    });
  }

  static toHTTPCasas(rawCasa: RawCasaWithJoins[]) {
    let casas: Casa[] = [];

    rawCasa.map((item) => {
      let relatorios: Relatorio[] = [];

      item.Relatorio.map((casa) => {
        const fotos = casa.Foto ? PrismaOcorrenciaMapper.toHTTPFotos(casa.Foto) : [];
        const afetados = casa.Afetados ? PrismaOcorrenciaMapper.toHTTPAfetados(casa.Afetados) : null;
        const animais = casa.Animal ? PrismaOcorrenciaMapper.toHTTPAnimais(casa.Animal) : null;
        const dadosVistoria = casa.DadosDaVistoria ? PrismaOcorrenciaMapper.toHTTPDadosVistoria(casa.DadosDaVistoria) : null;

        const relatorio = new Relatorio({
          areaAfetada: casa.area_afetada,
          interdicao: casa.interdicao,
          casaId: casa.id_casa,
          assunto: casa.assunto,
          situacaoVitimas: casa.situacao_vitimas,
          danosMateriais: casa.danos_materiais,
          dataAtendimento: casa.data_atendimento,
          assinaturaCivil: casa.assinatura_civil,
          assinaturaTecnico: casa.assinatura_tecnico,
          dataGeracao: casa.data_geracao,
          gravidade: casa.gravidade,
          observacoes: casa.observacoes,
          relatorio: casa.relatorio,
          tipoConstrucao: casa.tipo_construcao,
          tipoTalude: casa.tipo_talude,
          vegetacao: casa.vegetacao,
          fotos,
          animais,
          afetados,
          dadosVistoria
        }, casa.id);

        relatorios.push(relatorio);
        });
      
        casas.push(new Casa({
          complemento: item.complemento,
          interdicao: item.interdicao,
          relatorios
        }, item.id))
    });

    return casas;
  }

  static toHTTPResidencial(rawResidencial: ResidencialWithJoins, endereco: Endereco, casas: Casa[]) {
    return new Residencial({
      numero: rawResidencial.numero,
      endereco,
      casas
    }, rawResidencial.id);
  }
}