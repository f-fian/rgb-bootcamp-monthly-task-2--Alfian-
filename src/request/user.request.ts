import { IsString,IsNotEmpty } from "class-validator"

export class UserRequest {
    @IsNotEmpty()
    @IsString()
    nik:string

    @IsNotEmpty()
    @IsString()
    fullname:string

    @IsNotEmpty()
    @IsString()
    password:string

    @IsNotEmpty()
    @IsString()
    phone:string

    @IsNotEmpty()
    @IsString()
    email:string

    @IsNotEmpty()
    @IsString()
    birthDate:string

    @IsNotEmpty()
    @IsString()
    address:string
}




