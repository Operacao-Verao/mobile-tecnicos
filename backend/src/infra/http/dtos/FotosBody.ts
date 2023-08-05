import { IsBase64, IsNotEmpty } from "class-validator";

export class FotosBody {
    @IsNotEmpty()
    @IsBase64()
    url: string
}