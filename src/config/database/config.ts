import * as dotenv from "dotenv";
import * as fs from "fs";
import { Admin } from "src/model/adminModel";
import { Clinic } from "src/model/clinicModel";
import { Covid19 } from "src/model/covid19Model";
import { ClinicCovid19 } from "src/model/clinicCovid19Model";
import { JadwalTest } from "src/model/jadwalTestModel";
import { User } from "src/model/userModel";
import { Booking } from "src/model/bookingModel";
import { Jadwal } from "src/model/jadwalModel";

const env = dotenv.parse(fs.readFileSync(".env"))
export default {
    dialect: env.DB_PROVIDER,
    host:  env.DB_HOST,
    port:  env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    models: [Admin,Clinic,Covid19,ClinicCovid19,JadwalTest,User,Booking,Jadwal],
    autoLoadModels: env.DB_AUTO_LOAD_MODEL,
    synchronize:env.DB_SYNCHRONIZE
}



