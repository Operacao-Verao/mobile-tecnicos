import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Request, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { relatorioResponse } from "../responses/RelatorioResponse";
import { RelatorioBody } from "../dtos/RelatorioBody";
import { CriarRelatorio } from "@application/use-cases/criar-relatorio";
import { AtualizarRelatorio } from "@application/use-cases/atualizar-relatorio";
import { AtualizarRelatorioBody } from "../dtos/AtualizarRelatorioBody";
import { VerRelatoriosOcorrencia } from "@application/use-cases/ver-relatorios-ocorrencia";
import { RelatorioHelper } from "@helpers/relatorioHelper";
import { RelatorioViewModel } from "../view-models/relatorio-view-model";
import { JwtAuthGuard } from "@infra/auth/jwt-auth.guard";
import { FotosBody } from "../dtos/FotosBody";
import { AdicionarFoto } from "@application/use-cases/adicionar-foto";
import { ApagarFoto } from "@application/use-cases/apagar-foto";

@ApiTags('relatorios')
@Controller('relatorios')
export class RelatoriosController {
  constructor( 
    private criarRelatorio: CriarRelatorio,
    private atualizarRelatorio: AtualizarRelatorio,
    private verRelatoriosOcorrencia: VerRelatoriosOcorrencia,
    private adicionarFoto: AdicionarFoto,
    private apagarFoto: ApagarFoto
  ) {}
  @Post('criar/:ocorrenciaId')
  @UseGuards(JwtAuthGuard)
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
  async criar(@Body() body: RelatorioBody, @Param('ocorrenciaId') ocorrenciaId: string, @Request() req) {
    try {
      const { fotos } = body;
      
      const tecnicoId: number = req.user._id;

      const relatorioToNumber = RelatorioHelper.toNumber(body);

      const ocorrenciaIdToNumber = Number(ocorrenciaId);

      const { relatorio } = await this.criarRelatorio.execute({...relatorioToNumber, ocorrenciaId: ocorrenciaIdToNumber, fotos, tecnicoId});

      return RelatorioViewModel.toHTTP(relatorio);
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
  @UseGuards(JwtAuthGuard)
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
  async atualizar(@Body() body: AtualizarRelatorioBody, @Param('ocorrenciaId') ocorrenciaId: string, @Request() req) {
    try {
      const { fotos } = body;

      const tecnicoId: number = req.user._id;

      const relatorioToNumber = RelatorioHelper.toNumber(body);

      const parametros = {...relatorioToNumber, id: Number(body.id)};

      const ocorrenciaIdToNumber = Number(ocorrenciaId);

      const { relatorio } = await this.atualizarRelatorio.execute({...parametros, ocorrenciaId: ocorrenciaIdToNumber, fotos, tecnicoId});

      return RelatorioViewModel.toHTTP(relatorio);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.PRECONDITION_FAILED,
        error: error.message,
      }, HttpStatus.PRECONDITION_FAILED, {
        cause: error
      });
    }
  }

  @Get('ver/:ocorrenciaId')
  @UseGuards(JwtAuthGuard)
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
  async verRelatorios(@Request() req, @Param('ocorrenciaId') ocorrenciaId: string) {
    try {
      const tecnicoId: number = req.user._id;
      const ocorrenciaIdToNumber = Number(ocorrenciaId);

      const { relatorios } = await this.verRelatoriosOcorrencia.execute({
        tecnicoId,
        ocorrenciaId: ocorrenciaIdToNumber
      });

      return relatorios.map(RelatorioViewModel.toHTTP);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: error.message,
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

  @Post('adicionarFoto/:relatorioId')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Adiciona uma foto em uma ocorrência" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  async criarFoto( @Body() body: FotosBody, @Param('relatorioId') relatorioId: string, @Request() req) {
    const tecnicoId: number = req.user._id;
    const relatorioIdToNumber = Number(relatorioId);

    try {
      const { url } = await this.adicionarFoto.execute({
        relatorioId: relatorioIdToNumber,
        tecnicoId,
        url: body.url
      });

      return {
        url
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.PRECONDITION_FAILED,
        error: error.message,
      }, HttpStatus.PRECONDITION_FAILED, {
        cause: error
      });
    }
  }

  @Delete('apagarFoto/:relatorioId/:fotoId')
  async deletarFoto(@Param('relatorioId') relatorioId: string, @Param('fotoId') fotoId: string, @Request() req) {
    const tecnicoId: number = req.user._id;
    const relatorioIdToNumber = Number(relatorioId);
    const fotoIdToNumber = Number(fotoId);

    try {
      const { mensagem } = await this.apagarFoto.execute({
        relatorioId: relatorioIdToNumber,
        tecnicoId,
        fotoId: fotoIdToNumber
      });

      return {
        mensagem
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.PRECONDITION_FAILED,
        error: error.message,
      }, HttpStatus.PRECONDITION_FAILED, {
        cause: error
      });
    }
  }
}