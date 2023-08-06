import { Module } from "@nestjs/common";
import { TecnicosController } from "./controllers/tecnicos.controller";
import { OcorrenciasController } from "./controllers/ocorrencias.controller";
import { RelatoriosController } from "./controllers/relatorios.controller";
import { DatabaseModule } from "@infra/database/database.module";
import { AuthService } from "@infra/auth/auth-service";
import { JwtService } from "@nestjs/jwt";
import { VerOcorrencias } from "@application/use-cases/ver-ocorrencias";
import { VerOcorrencia } from "@application/use-cases/ver-ocorrencia";
import { CriarRelatorio } from "@application/use-cases/criar-relatorio";
import { AtualizarRelatorio } from "@application/use-cases/atualizar-relatorio";
import { FiltrarOcorrencia } from "@application/use-cases/filtrar-ocorrencia";

@Module({
  imports: [DatabaseModule],
  controllers: [TecnicosController, OcorrenciasController, RelatoriosController],
  providers: [
    AuthService, 
    JwtService,
    VerOcorrencias,
    VerOcorrencia,
    CriarRelatorio,
    AtualizarRelatorio,
    FiltrarOcorrencia
  ]
})
export class HttpModule {}