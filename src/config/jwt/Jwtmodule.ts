import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import config from "./configJwt";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports:[PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret:config.secret,
      signOptions: {
        expiresIn: 36000,
      },
    })]
})
export class ConfigJwt{}

// export default [SequelizeModule.forRoot(config as any)]
