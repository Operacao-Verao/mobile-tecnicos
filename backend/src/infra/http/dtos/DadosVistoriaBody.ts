import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class DadosVistoriaBody {
  @IsBoolean()
  @IsNotEmpty()
  desmoronamento: boolean

  @IsBoolean()
  @IsNotEmpty()
  deslizamento: boolean

  @IsBoolean()
  @IsNotEmpty()
  esgoto_escoamento: boolean

  @IsBoolean()
  @IsNotEmpty()
  erosao: boolean 

  @IsBoolean()
  @IsNotEmpty()
  inundacao: boolean

  @IsBoolean()
  @IsNotEmpty()
  incendio: boolean

  @IsBoolean()
  @IsNotEmpty()
  arvores: boolean

  @IsBoolean()
  @IsNotEmpty()
  infiltracao_trinca: boolean

  @IsBoolean()
  @IsNotEmpty()
  judicial: boolean

  @IsBoolean()
  @IsNotEmpty()
  monitoramento: boolean

  @IsBoolean()
  @IsNotEmpty()
  transito: boolean

  @IsString()
  outros: string
}