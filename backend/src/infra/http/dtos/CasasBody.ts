import { IsNotEmpty, IsNumber, Min, Max, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CasasBody {
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
    @IsString()
    @ApiProperty({
      description: "Texto para melhor identificação da casa",
      example: "Próximo a padaria",
    })
    complemento: string

    @ApiProperty({
      description: "Id residencial",
      example: 1,
    })
    @IsNotEmpty()
    @IsNumber()
    id_residencial: number
}