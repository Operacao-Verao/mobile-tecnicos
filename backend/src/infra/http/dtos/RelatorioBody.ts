import { base64example } from "@helpers/base64"
import { ApiProperty } from "@nestjs/swagger"
import { IsDateString, IsNotEmpty, IsNumber, IsString, IsUUID, Max, MaxLength, Min, MinLength } from "class-validator"
import { AfetadosBody } from "./AfetadosBody"
import { AnimaisBody } from "./AnimaisBody"
import { FotosBody } from "./FotosBody"
import { DadosVistoriaBody } from "./DadosVistoriaBody"

export class RelatorioBody {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: "Número de enfermos",
    example: 2,
  })
  enfermos: number

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: "Id da ocorrência",
    example: 2,
  })
  ocorrencia_id: number

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: "Id da casa",
    example: 2,
  })
  casa_id: number

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(2)
  @ApiProperty({
    description: "Não (0), parcial (1) ou total (1)",
    example: 1,
  })
  interdicao: number

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(2)
  @ApiProperty({
    description: "Inespecificado (0), desabrigados (1) ou desalojados (2)",
    example: 2,
  })
  situacaoVitimas: number

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(2)
  @ApiProperty({
    description: "Nenhum (0), risco (1) ou desastre (2)",
    example: 2
  })
  gravidade: number

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(355)
  @ApiProperty({
    description: "Relatório do ocorrido",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra et dolor ac commodo. Etiam non commodo ex. Duis maximus justo in rutrum pulvinar. In hac habitasse platea dictumst. Nulla placerat nisi ornare, sollicitudin diam sagittis, iaculis nulla. Etiam ullamcorper velit in magna luctus laoreet."
  })
  relatorio: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(200)
  @ApiProperty({
    description: "Assunto do ocorrido",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra et dolor ac commodo. Etiam non commodo ex. Duis maximus justo in rutrum pulvinar. In hac habitasse platea dictumst. Nulla placerat nisi ornare, sollicitudin diam sagittis, iaculis nulla. Etiam ullamcorper velit in magna luctus laoreet."
  })
  assunto: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(200)
  @ApiProperty({
    description: "Assinatura do civil em svg",
    example: "data:image/svg........."
  })
  assinaturaCivil: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(200)
  @ApiProperty({
    description: "Assinatura do técnico em svg",
    example: "data:image/svg........."
  })
  assinaturaTecnico: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(355)
  @ApiProperty({
    description: "Observações do ocorrido",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra et dolor ac commodo. Etiam non commodo ex. Duis maximus justo in rutrum pulvinar. In hac habitasse platea dictumst. Nulla placerat nisi ornare, sollicitudin diam sagittis, iaculis nulla. Etiam ullamcorper velit in magna luctus laoreet."
  })
  observacoes: string

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(2)
  @ApiProperty({
    description: "Inespecificado (0), publica (1) ou particular (2)",
    example: 1
  })
  areaAfetada: number

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(3)
  @ApiProperty({
    description: "Inespecificado (0), alvenaria (1), madeira (2) ou mista (3)",
    example: 1
  })
  tipoConstrucao: number

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(3)
  @ApiProperty({
    description: "Inespecificado (0), natural (1), de corte (2) ou aterro (3)",
    example: 1,

  })
  tipoTalude: number

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(2)
  @ApiProperty({
    description: "Nenhuma (0), rasteira (1) ou árvores (2)",
    example: 1
  })
  vegetacao: number

  @IsNotEmpty()
  @ApiProperty({
    description: "Se houve dandos materiais ou não no ocorrido",
    example: false
  })
  danosMateriais: boolean

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({
    description: "Data de geração do ocorrida",
    example: "2023-08-25 14:00:00",
    format: "yyyy-mm-dd hh:ss:mm"
  })
  dataGeracao: Date

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({
    description: "Data de geração do ocorrida",
    example: "2023-08-25 14:00:00",
    format: "yyyy-mm-dd hh:ss:mm"
  })
  dataAtendimento: Date

  @ApiProperty({
    description: "Afetados do ocorrido",
    example: {
      adultos: 3,
      criancas: 1,
      idosos: 2,
      especiais: 0,
      mortos: 1,
      feridos: 1,
      enfermos: 0
    }
  })
  afetados: AfetadosBody

  @ApiProperty({
    description: "Animais do ocorrido",
    example: {
      caes: 2,
      gatos: 1,
      aves: 1,
      equinos: 0
    }
  })
  animais: AnimaisBody

  @ApiProperty({
    description: "Dados da vistoria",
    example: {
      desmoronamento: true,
      deslizamento: true,
      esgoto_escoamento: false,
      erosao: false,
      inundacao: true,
      incendio: false,
      arvores: false,
      infiltracao_trinca: true,
      judicial: true,
      monitoramento: true,
      transito: false,
      outros: "Parâmetro opcional caso a opção desejada não esteja contemplada anteriormente"
    }
  })
  dadosVistoria: DadosVistoriaBody

  @ApiProperty({
    description: "Fotos do relatório",
    example: [
      {
        url: base64example
      }
    ]
  })
  fotos?: FotosBody[]
}