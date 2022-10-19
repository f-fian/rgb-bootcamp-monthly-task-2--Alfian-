import { IsString,IsNotEmpty } from "class-validator"
export class UserLoginRequest {
    @IsString()
    @IsNotEmpty()
    email:string
    @IsString()
    @IsNotEmpty()
    password:string
}