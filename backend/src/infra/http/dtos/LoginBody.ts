import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class LoginBody {
  @IsNotEmpty()
  @IsEmail()
  @MinLength(1)
  @MaxLength(70)
  @ApiProperty({
    description: "Email utilizado pelo técnico no login",
    example: "john@doe.com",
    minLength: 1,
    maxLength: 70
  })
  username: string

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(70)
  @ApiProperty({
    description: "Senha utilizado pelo técnico no login",
    example: "&$j0WXC4%x8W",
    minLength: 1,
    maxLength: 70
  })
  password: string
}