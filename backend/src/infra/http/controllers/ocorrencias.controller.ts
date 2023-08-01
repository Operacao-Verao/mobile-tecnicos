import { Controller, Get, HttpException, HttpStatus, Param } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ocorrenciaResponse } from "../responses/OcorrenciaResponse";
import { VerOcorrencias } from "@application/use-cases/ver-ocorrencias";
import { VerOcorrencia } from "@application/use-cases/ver-ocorrencia";

@ApiTags('ocorrencias')
@Controller('ocorrencias')
export class OcorrenciasController {
  constructor(
    private verOcorrencias: VerOcorrencias,
    private verOcorrencia: VerOcorrencia
    ) {}

  @Get('ver/:tecnicoId')
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
  async ver(@Param('tecnicoId') tecnicoId: string) {
    const tecnicoIdToNumber = Number(tecnicoId);

    try {
      const { ocorrencias } = await this.verOcorrencias.execute({
        tecnicoId: tecnicoIdToNumber
      });
  
      return {
        ocorrencias
      };
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: error.message,
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

  @Get('ver/:id/:tecnicoId')
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
  async verUma(@Param('id') id: string, @Param('tecnicoId') tecnicoId: string) {
    const tecnicoIdToNumber = Number(tecnicoId);
    const ocorrenciaIdToNumber = Number(id);

    try {
      const { ocorrencia } = await this.verOcorrencia.execute({
        tecnicoId: tecnicoIdToNumber,
        ocorrenciaId: ocorrenciaIdToNumber
      });
  
      return {
        ocorrencia
      };
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: error.message,
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
  }}

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