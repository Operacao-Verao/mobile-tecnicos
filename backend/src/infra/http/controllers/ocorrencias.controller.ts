import { Controller, Get, HttpException, HttpStatus, Param, Query, Request, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ocorrenciaResponse } from "../responses/OcorrenciaResponse";
import { VerOcorrencias } from "@application/use-cases/ver-ocorrencias";
import { VerOcorrencia } from "@application/use-cases/ver-ocorrencia";
import { OptionalParams } from "../dtos/DateOptionalParam";
import { FiltrarOcorrencia } from "@application/use-cases/filtrar-ocorrencia";
import { JwtAuthGuard } from "@infra/auth/jwt-auth.guard";

@ApiTags('ocorrencias')
@Controller('ocorrencias')
export class OcorrenciasController {
  constructor(
    private verOcorrencias: VerOcorrencias,
    private verOcorrencia: VerOcorrencia,
    private filtrarOcorrencia: FiltrarOcorrencia
  ) {}

  @Get('ver')
  @UseGuards(JwtAuthGuard)
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
  async ver(@Request() req) {
    const tecnicoIdToNumber = Number(req.user._id);
    
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

  @Get('ver/:id')
  @UseGuards(JwtAuthGuard)
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
  async verUma(@Param('id') id: string, @Request() req) {
    console.log(req)
    const tecnicoIdToNumber = Number(req.user._id);
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

  @Get('filtrar')
  @ApiOperation({ summary: "Mostra os dados de várias ocorrências filtradas por status" })
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
  async filtrarPorStatus(@Query() { dataHora }: OptionalParams, @Request() req) {
    try {
      let dataHoraStringToDate: Date | undefined;
      
      const tecnicoIdToNumber = Number(req.user._id);
      
      if(dataHora) { dataHoraStringToDate = new Date(dataHora) }

      const { ocorrencias } = await this.filtrarOcorrencia.execute({
        dataHora: dataHoraStringToDate,
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
}