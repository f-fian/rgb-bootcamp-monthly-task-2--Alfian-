import * as dotenv from "dotenv";
import * as fs from "fs";
import { Admin } from "src/model/adminModel";
import { Clinic } from "src/model/clinicModel";

import { Covid19 } from "src/model/covid19Model";
import { Mcu } from "src/model/mcuModel";
import { Testlab } from "src/model/testlabModel";
import { ClinicCovid19 } from "src/model/clinicCovid19Model";
import { ClinicMcu } from "src/model/clinicMcuModel";
import { ClinicTestlab } from "src/model/clinicTestlabModel";

const env = dotenv.parse(fs.readFileSync(".env"))
export default {
    dialect: env.DB_PROVIDER,
    host:  env.DB_HOST,
    port:  env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    models: [Clinic,Admin,ClinicCovid19,Covid19,Mcu,ClinicMcu,Testlab,ClinicTestlab],
    autoLoadModels: env.DB_AUTO_LOAD_MODEL,
    synchronize:env.DB_SYNCHRONIZE
}



