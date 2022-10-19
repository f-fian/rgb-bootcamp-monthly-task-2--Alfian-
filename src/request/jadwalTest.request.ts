import { IsInt,IsString,IsNotEmpty } from "class-validator";


export class JadwalTestRequest {
    @IsInt()
    @IsNotEmpty()
    clinic_covid_id: number
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