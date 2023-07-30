import { IsNotEmpty, IsNumber } from "class-validator"

export class AnimaisBody {
  @IsNotEmpty()
  @IsNumber()
  caes: number

  @IsNotEmpty()
  @IsNumber()
  gatos: number

  @IsNotEmpty()
  @IsNumber()
  aves: number

  @IsNotEmpty()
  @IsNumber()
  equinos: number
}