import * as dotenv from "dotenv";
import * as fs from "fs";
import { Clinic } from "src/model/clinicModel";

const env = dotenv.parse(fs.readFileSync(".env"))
export default {
    dialect: env.DB_PROVIDER,
    host:  env.DB_HOST,
    port:  env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    models: [Clinic],
    autoLoadModels: env.DB_AUTO_LOAD_MODEL,
    synchronize:env.DB_SYNCHRONIZE
}



