import { ApiProperty } from "@nestjs/swagger";
import { IsBase64, IsNotEmpty } from "class-validator";

export class FotosBody {
    @IsNotEmpty()
    @IsBase64()
    @ApiProperty({
        description: "URL em base64",
        example: "data:image/jpeg;base64,/............."
    })
    url: string
}