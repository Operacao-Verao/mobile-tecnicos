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
import { VerRelatoriosOcorrencia } from "@application/use-cases/ver-relatorios-ocorrencia";
import { AdicionarFoto } from "@application/use-cases/adicionar-foto";
import { ApagarFoto } from "@application/use-cases/apagar-foto";
import { CriarCasa } from "@application/use-cases/criar-casa";
import { CasasController } from "./controllers/casas.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [TecnicosController, OcorrenciasController, RelatoriosController, CasasController],
  providers: [
    AuthService, 
    JwtService,
    VerOcorrencias,
    VerOcorrencia,
    CriarRelatorio,
    AtualizarRelatorio,
    FiltrarOcorrencia,
    VerRelatoriosOcorrencia,
    AdicionarFoto,
    ApagarFoto,
    CriarCasa
  ]
})
export class HttpModule {}