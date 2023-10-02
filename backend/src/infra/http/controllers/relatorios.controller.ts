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
  @Post('criar')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Cria um relatório para uma casa" })
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
  async criar(@Body() body: RelatorioBody, @Request() req) {
      try {
        const { fotos } = body;
      
        const tecnicoId: number = req.user._id;

        const relatorioToNumber = RelatorioHelper.toNumber(body);

        const { relatorio } = await this.criarRelatorio.execute({...relatorioToNumber, ocorrenciaId: relatorioToNumber.ocorrencia_id, fotos, tecnicoId, casaId: relatorioToNumber.casa_id});

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

  @Put('alterar')
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
  async atualizar(@Body() body: AtualizarRelatorioBody, @Request() req) {
    try {

      const tecnicoId: number = req.user._id;

      const relatorioToNumber = RelatorioHelper.toNumber(body);

      const parametros = {...relatorioToNumber, id: Number(body.id)};

      const { relatorio } = await this.atualizarRelatorio.execute({...parametros, ocorrenciaId: parametros.ocorrencia_id, tecnicoId, casaId: parametros.casa_id});

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

  @Get('ver/:casaId')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Mostra os dados de vários relatórios de uma casa" })
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
  async verRelatorios(@Param('casaId') casaId: string) {
      const casaIdToNumber = Number(casaId);

      const { relatorios } = await this.verRelatoriosOcorrencia.execute({
        casaId: casaIdToNumber
      });

      return relatorios.map(RelatorioViewModel.toHTTP);
  }

  @Post('adicionarFoto/:relatorioId')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Adiciona uma foto em uma ocorrência" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'object',
      properties: {
        url: {
          example: "base64"
        }
      }
    }
  })
  async criarFoto(@Body() body: FotosBody, @Param('relatorioId') relatorioId: string, @Request() req) {
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
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Apaga uma foto de uma ocorrência" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        mensagem: {
          example: "Foto deletada com sucesso"
        }
      }
    }
  })
  async deletarFoto(@Param('relatorioId') relatorioId: string, @Param('fotoId') fotoId: string, @Request() req) {
    
    const tecnicoId: number = req.user.sub;
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