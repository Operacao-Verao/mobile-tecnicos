import { Afetados } from '@application/entities/afetados'
import { Animais } from '@application/entities/animais'
import { Endereco } from '@application/entities/endereco'
import { Ocorrencia } from '@application/entities/ocorrencia'
import { Relatorio } from '@application/entities/relatorio'
import { Tecnico } from '@application/entities/tecnico'
import { Ocorrencia as RawOcorrencia, Relatorio as RawRelatorio, Tecnico as RawTecnico, Funcionario as RawFuncionario, Animal as RawAnimal, Afetados as RawAfetados, Civil as RawCivil, Endereco as RawEndereco, Foto as RawFoto } from '@prisma/client'

interface RawCivilWithJoins extends RawCivil {
  Endereco: RawEndereco
}

interface RawTecnicoWithJoins extends RawTecnico {
  Funcionario: RawFuncionario
}

interface RawRelatorioWithJoins extends RawRelatorio {
  Animal: RawAnimal,
  Afetados: RawAfetados, 
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
      const fotos: {url: string}[] = [];

      const animais = new Animais({
        aves: item.Animal.aves,
        caes: item.Animal.caes,
        equinos: item.Animal.equinos,
        gatos: item.Animal.gatos
      }, item.Animal.id);
      
      const afetados = new Afetados({
        adultos: item.Afetados.adultos,
        criancas: item.Afetados.criancas,
        enfermos: item.Afetados.enfermos,
        especiais: item.Afetados.especiais,
        feridos: item.Afetados.feridos,
        idosos: item.Afetados.idosos,
        mortos: item.Afetados.mortos
      }, item.Afetados.id);
      
      item.Foto.map((item) => {
        fotos.push({
          url: item.codificado
        });
      });

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
        afetados
      }, item.id);

      relatorios.push(relatorio);
    })
    
    const tecnico = new Tecnico({
      email: rawOcorrencia.Tecnico.Funcionario.email,
      nome: rawOcorrencia.Tecnico.Funcionario.nome,
      senha: rawOcorrencia.Tecnico.Funcionario.senha
    }, rawOcorrencia.Tecnico.id);

    const endereco = new Endereco({
      cep: rawOcorrencia.Civil.Endereco.cep,
      bairro: rawOcorrencia.Civil.Endereco.bairro,
      cidade: rawOcorrencia.Civil.Endereco.cidade,
      rua: rawOcorrencia.Civil.Endereco.rua
    });

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
}