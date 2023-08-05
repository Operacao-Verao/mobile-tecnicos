import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { relatorioResponse } from "../responses/RelatorioResponse";
import { RelatorioBody } from "../dtos/RelatorioBody";
import { CriarRelatorio } from "@application/use-cases/criar-relatorio";
import { AfetadosHelper } from "@helpers/afetadosHelper";
import { AnimaisHelper } from "@helpers/animaisHelper";

@ApiTags('relatorios')
@Controller('relatorios')
export class RelatoriosController {
  constructor( 
    private criarRelatorio: CriarRelatorio
  ) {}
  @Post('criar/:ocorrenciaId')
  @ApiOperation({ summary: "Cria um relatório para uma ocorrência" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'object',
      properties: relatorioResponse.properties
    }
  })
  @ApiBearerAuth()
  async criar(@Body() body: RelatorioBody, @Param('ocorrenciaId') ocorrenciaId: string) {
    try {
      const { afetados, animais, fotos, ...rest } = body;

      const afetadosToNumber = AfetadosHelper.toNumber(afetados);
      const animaisToNumber = AnimaisHelper.toNumber(animais);
      const ocorrenciaIdToNumber = Number(ocorrenciaId);

      const { relatorio } = await this.criarRelatorio.execute({...rest, afetados: afetadosToNumber, animais: animaisToNumber, ocorrenciaId: ocorrenciaIdToNumber, fotos});

      return {
        relatorio
      };
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.PRECONDITION_FAILED,
        error: error.message,
      }, HttpStatus.PRECONDITION_FAILED, {
        cause: error
      });
    }
  }

  @Put('alterar/:ocorrenciaId')
  @ApiOperation({ summary: "Atualiza um relatório de uma ocorrência" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'object',
      properties: relatorioResponse.properties
    }
  })
  @ApiBearerAuth()
  async atualizar(@Body() body: RelatorioBody) {
    
  }

  @Delete('delete/:ocorrenciaId')
  @ApiOperation({ summary: "Apaga um relatório de uma ocorrência" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @ApiResponse({
    status: 201,
    description: 'Relatório excluído com sucesso'
  })
  @ApiBearerAuth()
  async excluir() {

  }

  @Get('ver/:ocorrenciaId')
  @ApiOperation({ summary: "Mostra os dados de vários relatórios de uma ocorrência" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'array',
      items: relatorioResponse
    }
  })
  @ApiBearerAuth()
  async verOcorrencias() {

  }
}