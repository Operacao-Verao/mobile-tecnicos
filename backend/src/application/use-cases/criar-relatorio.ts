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

interface CriarRelatorioRequest {
  enfermos: number
  assunto: string
  gravidade: string
  relatorio: string
  encaminhamento: string
  memorando: string
  oficio: string
  processo: string
  observacoes: string
  areaAfetada: string
  tipoConstrucao: string
  tipoTalude: string
  vegetacao: string
  danosMateriais: boolean
  dataGeracao: Date
  dataAtendimento: Date
  afetados: AfetadosBody
  animais: AnimaisBody
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
    const { animais, afetados, ...rest  } = request;
    
    const classAnimais = new Animais(animais);
    
    const classAfetados = new Afetados(afetados);
    
    const classRelatorio = {...rest, animais: classAnimais, afetados: classAfetados}

    const relatorio = new Relatorio(classRelatorio);

    await this.relatoriosRepository.criarRelatorio(relatorio);

    return {
      relatorio
    };
  }
}