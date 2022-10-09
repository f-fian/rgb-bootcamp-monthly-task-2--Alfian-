import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import config from "./config";
@Module({
    imports:[SequelizeModule.forRoot(config as any)],
})
export class ConfigModule{}

// export default [SequelizeModule.forRoot(config as any)]
