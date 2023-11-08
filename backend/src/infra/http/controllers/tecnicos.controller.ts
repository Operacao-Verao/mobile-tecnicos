import { Body, Controller, Get, HttpException, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LoginBody } from "../dtos/LoginBody";
import { loginResponse } from "../responses/LoginResponse";
import { tecnicoResponse } from "../responses/TecnicoResponse";
import { AuthService } from "@infra/auth/auth-service";
import { JwtAuthGuard } from "@infra/auth/jwt-auth.guard";
import { TecnicoViewModel } from "../view-models/tecnico-view-model";
import { LocalAuthGuard } from "@infra/auth/local-auth.guard";

@ApiTags('tecnicos')
@Controller('tecnicos')
export class TecnicosController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: "Autentica um técnico" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'object',
      properties: loginResponse
    }
  })
  async login(@Body() body: LoginBody, @Request() req) {
    try {
      return this.authService.login(req.user);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.PRECONDITION_FAILED,
        error: error.message,
      }, HttpStatus.PRECONDITION_FAILED, {
        cause: error
      });
    }
  }

  @Get('verDados')
  @ApiOperation({ summary: "Mostra os dados de um técnico" })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @ApiResponse({
    status: 201,
    schema: {
      type: 'object',
      properties: tecnicoResponse
    }
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async verDados(@Request() req) {
    try {
      return TecnicoViewModel.toHTTP(req.user);  
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