import { Module } from "@nestjs/common";
import { TecnicosController } from "./controllers/tecnicos.controller";
import { OcorrenciasController } from "./controllers/ocorrencias.controller";
import { RelatoriosController } from "./controllers/relatorios.controller";

@Module({
  controllers: [TecnicosController, OcorrenciasController, RelatoriosController]
})
export class HttpModule {}