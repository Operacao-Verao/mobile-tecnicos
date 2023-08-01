import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth-service";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { DatabaseModule } from "@infra/database/database.module";

@Module({
  imports: [ DatabaseModule, PassportModule, JwtModule.register({
    secret: 'test',
    signOptions: { expiresIn: '1h' }
  })],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}