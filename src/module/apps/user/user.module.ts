import { Module} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/model/userModel';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [SequelizeModule.forFeature([User]),JwtModule.register({
    secret: "secret",
    signOptions: { expiresIn: '300s' },
  }),
],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
