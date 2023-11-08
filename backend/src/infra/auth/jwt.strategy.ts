import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { TecnicoNotFound } from "@application/use-cases/errors/TecnicoNotFound";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly tecnicosRepository: TecnicosRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_JWT
    })
  }

  async validate(payload: any) {
    const tecnico = await this.tecnicosRepository.findById(payload.sub);
    
    if(!tecnico) {
      throw new TecnicoNotFound();
    }

    return tecnico;
  }
}