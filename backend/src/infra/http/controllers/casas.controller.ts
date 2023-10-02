import { CriarCasa } from "@application/use-cases/criar-casa";
import { Controller, Post, UseGuards, Body, Request, HttpException, HttpStatus } from "@nestjs/common";
import { JwtAuthGuard } from "@infra/auth/jwt-auth.guard";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CasasBody } from "../dtos/CasasBody";
import { CasasViewModel } from "../view-models/casas-view-model";

@ApiTags('casas')
@Controller('casas') 
export class CasasController {
    constructor(
        private criarCasa: CriarCasa
    ) {}

    @Post('criar')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: "Cria uma casa em um residencial" })
    @ApiResponse({
      status: 401,
      description: "Unauthorized",
    })
    @ApiBearerAuth()
    async criar(@Body() body: CasasBody, @Request() req) {
        try {
            const { interdicao, complemento, id_residencial } = body;
    
            const { casa } = await this.criarCasa.execute({
                complemento,
                interdicao, 
                id_residencial
            });
            
            return CasasViewModel.toHTTP(casa);
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