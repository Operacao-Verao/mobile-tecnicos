import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth-service";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { DatabaseModule } from "@infra/database/database.module";
import { LocalStrategy } from "./local.strategy";
import { SessionSerializer } from "./session.serialize";

@Module({
  imports: [ DatabaseModule, PassportModule, JwtModule.register({
    secret: 'test',
    signOptions: { expiresIn: '1h' }
  })],
  providers: [AuthService, JwtStrategy, LocalStrategy, SessionSerializer],
  exports: [AuthService]
})
export class AuthModule {}