import { IsString,IsEmail,IsNotEmpty} from "class-validator"

export class AdminRequest {
    @IsEmail()
    @IsNotEmpty()
    email:string
    @IsString()
    password:string
}