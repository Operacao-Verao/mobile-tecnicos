import { Afetados } from "@application/entities/afetados";
import { Animais } from "@application/entities/animais";
import { DadosVistoria } from "@application/entities/dadosVistoria";
import { Relatorio } from "@application/entities/relatorio";
import { RelatoriosRepository } from "@application/repositories/relatorios-repository";
import { Injectable } from "@nestjs/common";

interface AfetadosBody {
  adultos: number
  criancas: number
  idosos: number
  especiais: number
  mortos: number
  feridos: number
  enfermos: number
}

interface AnimaisBody {
  caes: number
  gatos: number
  aves: number
  equinos: number
}

interface DadosVistoriaBody {
  desmoronamento: boolean
  deslizamento: boolean
  esgoto_escoamento: boolean
  erosao: boolean
  inundacao: boolean
  incendio: boolean
  arvores: boolean
  infiltracao_trinca: boolean
  judicial: boolean
  monitoramento: boolean
  transito: boolean
  outros?: string
}

interface AtualizarRelatorioRequest {
  id: number
  ocorrenciaId: number
  casaId: number
  tecnicoId: number
  enfermos: number
  assunto: string
  gravidade: number
  relatorio: string
  observacoes: string
  areaAfetada: number
  assinaturaCivil: string
  assinaturaTecnico: string
  tipoConstrucao: number
  tipoTalude: number
  vegetacao: number
  danosMateriais: boolean
  situacaoVitimas: number
  interdicao: number
  dataGeracao: Date
  dataAtendimento: Date
  afetados: AfetadosBody
  animais: AnimaisBody
  dadosVistoria: DadosVistoriaBody
}

interface AtualizarRelatorioResponse {
  relatorio: Relatorio
}


@Injectable()
export class AtualizarRelatorio {
  constructor(
    private relatoriosRepository: RelatoriosRepository
  ) {}

  async execute(request: AtualizarRelatorioRequest): Promise<AtualizarRelatorioResponse> {
    const { animais, afetados, ocorrenciaId, dadosVistoria, id, tecnicoId, casaId, ...rest  } = request;
    
    const classAnimais = new Animais(animais);
    
    const classAfetados = new Afetados(afetados);

    const classDadosVistoria = new DadosVistoria(dadosVistoria);

    const relatorio = new Relatorio({...rest, animais: classAnimais, afetados: classAfetados, dadosVistoria: classDadosVistoria, casaId}, id);

    await this.relatoriosRepository.alterarRelatorio(relatorio, ocorrenciaId, tecnicoId, casaId);

    return {
      relatorio
    };
  }
}