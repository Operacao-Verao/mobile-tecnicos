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

interface FotosBody {
  url: string
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

interface CriarRelatorioRequest {
  ocorrenciaId: number
  casaId: number
  tecnicoId: number
  assunto: string
  gravidade: number
  relatorio: string
  encaminhamento: string
  memorando: string
  oficio: string
  processo: string
  observacoes: string
  areaAfetada: number
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
  fotos: FotosBody[]
  dadosVistoria: DadosVistoriaBody
}

interface CriarRelatorioResponse {
  relatorio: Relatorio
}


@Injectable()
export class CriarRelatorio {
  constructor(
    private relatoriosRepository: RelatoriosRepository
  ) {}

  async execute(request: CriarRelatorioRequest): Promise<CriarRelatorioResponse> {
    const { animais, afetados, dadosVistoria, tecnicoId, ocorrenciaId, casaId, ...rest  } = request;
    
    const classAnimais = new Animais(animais);
    
    const classAfetados = new Afetados(afetados);

    const classDadosVistoria = new DadosVistoria(dadosVistoria);

    const relatorio = new Relatorio({...rest, animais: classAnimais, afetados: classAfetados, dadosVistoria: classDadosVistoria, casaId});
    
    await this.relatoriosRepository.criarRelatorio(relatorio, ocorrenciaId, tecnicoId, casaId);

    return {
      relatorio
    };
  }
}