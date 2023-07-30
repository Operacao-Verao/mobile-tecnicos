import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LoginBody } from "../dtos/LoginBody";
import { loginResponse } from "../responses/LoginResponse";
import { tecnicoResponse } from "../responses/TecnicoResponse";
import { AuthService } from "@infra/auth/auth-service";
import { JwtAuthGuard } from "@infra/auth/jwt-auth.guard";

@ApiTags('tecnicos')
@Controller('tecnicos')
export class TecnicosController {
  constructor(private readonly authService: AuthService) {}
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
    return this.authService.login(req.user)
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
  async verDados() {

  }
}