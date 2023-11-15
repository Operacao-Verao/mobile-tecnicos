import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, MaxLength } from "class-validator";

export class TokenBody {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(155)
    @ApiProperty({
      description: "Token gerado pelo expo para envio de notificações",
      example: "xxxx-xxxx-xxxx"
    })
    token: string
}