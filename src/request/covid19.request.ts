import { IsString, IsInt } from 'class-validator';

export class Covid19Request {
    @IsString()
    nama_test: string;
    @IsString()
    deskripsi: string;
    @IsInt()
    harga: number;
}
