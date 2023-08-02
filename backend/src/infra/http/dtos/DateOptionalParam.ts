import { ApiPropertyOptional } from "@nestjs/swagger";

export class OptionalParams {
  @ApiPropertyOptional()
  dataHora?: string
}