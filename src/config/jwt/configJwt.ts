import * as dotenv from "dotenv";
import * as fs from "fs";
const env = dotenv.parse(fs.readFileSync(".env"))
export default {
    secret: process.env.JWT_PASS
}



