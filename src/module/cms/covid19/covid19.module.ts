import { Module} from '@nestjs/common';
import { Covid19Service } from './covid19.service';
import { Covid19Controller } from './covid19.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Covid19 } from 'src/model/covid19Model';


@Module({
  imports: [SequelizeModule.forFeature([Covid19])],
  controllers: [Covid19Controller],
  providers: [Covid19Service],
})
export class Covid19Module {}
