import { compare } from "bcrypt";
import { Injectable } from "@nestjs/common";
import { TecnicosRepository } from "@application/repositories/tecnicos-repository";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private tecnicosRepository: TecnicosRepository,
    private jwtService: JwtService  
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.tecnicosRepository.findByEmail(username);

    const isPasswordCorrect = await compare(password, user.senha);

    if(user && isPasswordCorrect) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { name: user.nome, sub: user._id };
    
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}