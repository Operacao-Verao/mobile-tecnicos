import { IsNotEmpty, IsNumber } from "class-validator"

export class AfetadosBody {
  @IsNotEmpty()
  @IsNumber()
  adultos: number

  @IsNotEmpty()
  @IsNumber()
  criancas: number

  @IsNotEmpty()
  @IsNumber()
  idosos: number

  @IsNotEmpty()
  @IsNumber()
  especiais: number

  @IsNotEmpty()
  @IsNumber()
  mortos: number

  @IsNotEmpty()
  @IsNumber()
  feridos: number

  @IsNotEmpty()
  @IsNumber()
  enfermos: number
}