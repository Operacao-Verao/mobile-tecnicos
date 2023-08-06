import { Afetados } from "@application/entities/afetados";
import { Animais } from "@application/entities/animais";
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

interface AtualizarRelatorioRequest {
  id: number,
  ocorrenciaId: number,
  enfermos: number
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
  situacaoVitimas: number,
  interdicao: number,
  dataGeracao: Date
  dataAtendimento: Date
  afetados: AfetadosBody
  animais: AnimaisBody
  fotos: FotosBody[]
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
    const { animais, afetados, ocorrenciaId, id, ...rest  } = request;
    
    const classAnimais = new Animais(animais);
    
    const classAfetados = new Afetados(afetados);

    const relatorio = new Relatorio({...rest, animais: classAnimais, afetados: classAfetados}, id);

    await this.relatoriosRepository.alterarRelatorio(relatorio, ocorrenciaId);

    return {
      relatorio
    };
  }
}