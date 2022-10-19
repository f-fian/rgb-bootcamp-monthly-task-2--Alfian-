import { IsArray,IsNotEmpty } from "class-validator";

export class ClinicCovid19Request {
    @IsArray()
    @IsNotEmpty()
    covid19List: Array<number>;
    @IsArray()
    @IsNotEmpty()
    hargaList: Array<number>;
}

