import { compare } from "bcrypt";
import { Injectable } from "@nestjs/common";
import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { JwtService } from "@nestjs/jwt";
import { Tecnico } from "@application/entities/tecnico";

@Injectable()
export class AuthService {
  constructor(
    private tecnicosRepository: TecnicosRepository,
    private jwtService: JwtService  
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.tecnicosRepository.findByEmail(username);

    if(!user) {
      return null;
    }

    const isPasswordCorrect = await compare(password, user.senha.replace('$2y$', '$2a$'));

    if(isPasswordCorrect) {
      return user;
    }

    return null;
  }

  async login(user: Tecnico) {
    const payload = { nome: user.nome, sub: user.id };
    
    return {
      access_token: this.jwtService.sign(payload, {secret: process.env.SECRET_JWT, expiresIn: '1h'})
    };
  }
}