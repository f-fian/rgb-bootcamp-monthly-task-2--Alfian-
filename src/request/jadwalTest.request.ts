import { IsInt,IsString,IsNotEmpty } from "class-validator";


export class JadwalTestRequest {
    @IsString()
    @IsNotEmpty()
    tanggal: Date;
    @IsString()
    @IsNotEmpty()
    jam: string;
    @IsInt()
    @IsNotEmpty()
    kuota: number;
}