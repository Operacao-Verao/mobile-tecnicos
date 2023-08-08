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

interface CriarRelatorioRequest {
  ocorrenciaId: number,
  tecnicoId: number,
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

interface CriarRelatorioResponse {
  relatorio: Relatorio
}


@Injectable()
export class CriarRelatorio {
  constructor(
    private relatoriosRepository: RelatoriosRepository
  ) {}

  async execute(request: CriarRelatorioRequest): Promise<CriarRelatorioResponse> {
    const { animais, afetados, tecnicoId, ocorrenciaId, ...rest  } = request;
    
    const classAnimais = new Animais(animais);
    
    const classAfetados = new Afetados(afetados);

    const relatorio = new Relatorio({...rest, animais: classAnimais, afetados: classAfetados});

    await this.relatoriosRepository.criarRelatorio(relatorio, ocorrenciaId, tecnicoId);

    return {
      relatorio
    };
  }
}