import { IsString,IsNotEmpty,IsDate} from "class-validator";
import { isDateString } from "class-validator";

export class JadwalRequest {
    @IsNotEmpty()
    @IsString()
    tanggal: Date;

    @IsString()
    jam: string;
}