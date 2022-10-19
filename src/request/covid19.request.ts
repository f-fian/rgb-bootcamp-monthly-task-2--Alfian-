import { IsString, IsInt,IsNotEmpty } from 'class-validator';

export class Covid19Request {
    @IsNotEmpty()
    @IsString()
    nama_test: string;
    @IsNotEmpty()
    @IsString()
    deskripsi: string;
    @IsNotEmpty()
    @IsInt()
    harga: number;
}
