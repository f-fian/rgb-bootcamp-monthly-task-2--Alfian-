import { IsString,IsNotEmpty } from "class-validator";

export class ClinicRequest {
    @IsString()
    @IsNotEmpty()
    nama_clinic: string;
    @IsNotEmpty()
    @IsString()
    alamat: string;
    @IsNotEmpty()
    @IsString()
    telepon: number;
}