import { Module } from "@nestjs/common";
import { TecnicosController } from "./controllers/tecnicos.controller";
import { OcorrenciasController } from "./controllers/ocorrencias.controller";
import { RelatoriosController } from "./controllers/relatorios.controller";
import { DatabaseModule } from "@infra/database/database.module";
import { AuthService } from "@infra/auth/auth-service";
import { JwtService } from "@nestjs/jwt";
import { VerOcorrencias } from "@application/use-cases/ver-ocorrencias";

@Module({
  imports: [DatabaseModule],
  controllers: [TecnicosController, OcorrenciasController, RelatoriosController],
  providers: [
    AuthService, 
    JwtService,
    VerOcorrencias
  ]
})
export class HttpModule {}