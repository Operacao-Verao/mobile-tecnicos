import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LoginBody } from "../dtos/LoginBody";
import { loginResponse } from "../responses/LoginResponse";
import { tecnicoResponse } from "../responses/TecnicoResponse";

@ApiTags('tecnicos')
@Controller('tecnicos')
export class TecnicosController {
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
  async login(@Body() body: LoginBody) {
    
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
  async verDados() {

  }
}