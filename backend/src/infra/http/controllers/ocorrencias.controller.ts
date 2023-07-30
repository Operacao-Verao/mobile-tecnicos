import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ocorrenciaResponse } from "../responses/OcorrenciaResponse";

@ApiTags('ocorrencias')
@Controller('ocorrencias')
export class OcorrenciasController {
  @Get('ver')
  @ApiOperation({ summary: "Mostra os dados de várias ocorrências" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'array',
      items: ocorrenciaResponse.ocorrencia
    }
  })
  @ApiBearerAuth()
  async ver() {

  }

  @Get('ver/:id')
  @ApiOperation({ summary: "Mostra os dados de uma ocorrência" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'object',
      properties: ocorrenciaResponse
    }
  })
  @ApiBearerAuth()
  async verUma() {

  }

  @Get('filtrar/:status')
  @ApiOperation({ summary: "Mostra os dados de várias ocorrências filtradas por stauts" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'array',
      items: ocorrenciaResponse.ocorrencia
    }
  })
  @ApiBearerAuth()
  async filtrarPorStauts() {

  }
}