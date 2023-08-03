import { Afetados } from '@application/entities/afetados'
import { Animais } from '@application/entities/animais'
import { Endereco } from '@application/entities/endereco'
import { Ocorrencia } from '@application/entities/ocorrencia'
import { Relatorio } from '@application/entities/relatorio'
import { Tecnico } from '@application/entities/tecnico'
import { Ocorrencia as RawOcorrencia, Relatorio as RawRelatorio, Tecnico as RawTecnico, Funcionario as RawFuncionario, Animal as RawAnimal, Afetados as RawAfetados, Civil as RawCivil, Endereco as RawEndereco } from '@prisma/client'

interface RawCivilWithJoins extends RawCivil {
  Endereco: RawEndereco
}

interface RawTecnicoWithJoins extends RawTecnico {
  Funcionario: RawFuncionario
}

interface RawRelatorioWithJoins extends RawRelatorio {
  Animal: RawAnimal,
  Afetados: RawAfetados, 
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
      const animais = new Animais({
        aves: item.Animal.aves,
        caes: item.Animal.caes,
        equinos: item.Animal.esquinos,
        gatos: item.Animal.gatos
      }, item.Animal.id);
      
      const afetados = new Afetados({
        adultos: item.Afetados.adultos,
        criancas: item.Afetados.Criancas,
        enfermos: item.Afetados.enfermos,
        especiais: item.Afetados.especiais,
        feridos: item.Afetados.feridos,
        idosos: item.Afetados.idosos,
        mortos: item.Afetados.mortos
      }, item.Afetados.id);

      const relatorio = new Relatorio({
        areaAfetada: item.areaAfetada,
        assunto: item.assunto,
        danosMateriais: item.danos_materiais,
        dataAtendimento: item.dataAtendimento,
        dataGeracao: item.dataGeracao,
        encaminhamento: item.encaminhamento,
        enfermos: item.enfermos,
        gravidade: item.gravidade,
        memorando: item.memorando,
        observacoes: item.observacoes,
        oficio: item.oficio,
        processo: item.processo,
        relatorio: item.relatorio,
        tipoConstrucao: item.tipoConstrucao,
        tipoTalude: item.tipoTalude,
        vegetacao: item.vegetacao,
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
      data: rawOcorrencia.dataOcorrencia,
      num_casas: rawOcorrencia.num_Casas,
      relato: rawOcorrencia.relato_Civil,
      status: rawOcorrencia.aprovado,
      tecnico,
      endereco,
      relatorios
    })
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