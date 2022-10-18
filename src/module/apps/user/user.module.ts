import { Module} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/model/userModel';
import { JwtModule } from '@nestjs/jwt';
import { ClinicCovid19 } from 'src/model/clinicCovid19Model';
import { Jadwal } from 'src/model/jadwalModel';
import { Booking } from 'src/model/bookingModel';


@Module({
  imports: [SequelizeModule.forFeature([User,ClinicCovid19,Jadwal,Booking]),
  JwtModule.register({
    secret: "secret",
    signOptions: { expiresIn: '300s' },
  }),
],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
