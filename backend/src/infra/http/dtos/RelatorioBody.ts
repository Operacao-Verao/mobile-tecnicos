import { ApiProperty } from "@nestjs/swagger"
import { IsDateString, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"
import { AfetadosBody } from "./AfetadosBody"
import { AnimaisBody } from "./AnimaisBody"

export class RelatorioBody {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: "Número de enfermos",
    example: 2,
  })
  enfermos: number

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(9)
  @ApiProperty({
    description: "Gravidade do ocorrido",
    example: "Moderado"
  })
  gravidade: string

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
  @MaxLength(155)
  @ApiProperty({
    description: "Encaminhamento do ocorrido",
    example: "Secretaria"
  })
  encaminhamento: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @ApiProperty({
    description: "Memorando do ocorrido",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra et dolor ac commodo. Etiam non commodo ex. Duis maximus justo in rutrum pulvinar. In hac habitasse platea dictumst. Nulla placerat nisi ornare, sollicitudin diam sagittis, iaculis nulla. Etiam ullamcorper velit in magna luctus laoreet."
  })
  memorando: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @ApiProperty({
    description: "Ofício do ocorrido",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra et dolor ac commodo. Etiam non commodo ex. Duis maximus justo in rutrum pulvinar. In hac habitasse platea dictumst. Nulla placerat nisi ornare, sollicitudin diam sagittis, iaculis nulla. Etiam ullamcorper velit in magna luctus laoreet."
  })
  oficio: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @ApiProperty({
    description: "Processo do ocorrido",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra et dolor ac commodo. Etiam non commodo ex. Duis maximus justo in rutrum pulvinar. In hac habitasse platea dictumst. Nulla placerat nisi ornare, sollicitudin diam sagittis, iaculis nulla. Etiam ullamcorper velit in magna luctus laoreet."
  })
  processo: string

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
  @MaxLength(355)
  @ApiProperty({
    description: "Observações do ocorrido",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra et dolor ac commodo. Etiam non commodo ex. Duis maximus justo in rutrum pulvinar. In hac habitasse platea dictumst. Nulla placerat nisi ornare, sollicitudin diam sagittis, iaculis nulla. Etiam ullamcorper velit in magna luctus laoreet."
  })
  observacoes: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(10)
  @ApiProperty({
    description: "areaAfetada do ocorrido",
    example: "Pública"
  })
  areaAfetada: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(9)
  @ApiProperty({
    description: "Tipo de construção do ocorrido",
    example: "Alvenaria"
  })
  tipoConstrucao: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(8)
  @ApiProperty({
    description: "Tipo do talude do ocorrido",
    example: "Alvenaria"
  })
  tipoTalude: string

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  @ApiProperty({
    description: "Tipo de vegetação do ocorrido",
    example: "Rasteira"
  })
  vegetacao: string

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
}