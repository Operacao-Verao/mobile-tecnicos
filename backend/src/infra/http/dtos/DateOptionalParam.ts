import { ApiPropertyOptional } from "@nestjs/swagger";

export class OptionalParams {
  @ApiPropertyOptional({
    description: "Mostra registros anteriores a data informada. </br> Formato: yyyy-mm-ddThh:mm:ssZ",
    example: "2023-09-18T18:00:00Z",
  })
  dataHora?: string
}