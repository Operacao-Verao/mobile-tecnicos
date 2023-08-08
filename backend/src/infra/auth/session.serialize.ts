import { Tecnico } from "@application/entities/tecnico";
import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private tecnicosRepository: TecnicosRepository) { super(); }

  serializeUser(user: any, done: (err: Error, user: any) => void) {
    done(null, {id: user.id});
  }

  async deserializeUser(payload: any, done: (err: Error, payload: Tecnico) => void) {
    const user = await this.tecnicosRepository.findById(payload.id);

    done(null, user);
  }
}