import { Module} from '@nestjs/common';
import { JadwalTestService } from './jadwalTest.service';
import { JadwalTestController } from './jadwdalTest.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClinicCovid19 } from 'src/model/clinicCovid19Model';
import { JadwalTest } from 'src/model/jadwalTestModel';


@Module({
  imports: [SequelizeModule.forFeature([ClinicCovid19,JadwalTest])],
  controllers: [JadwalTestController],
  providers: [JadwalTestService],
})
export class JadwalTestModule {}
