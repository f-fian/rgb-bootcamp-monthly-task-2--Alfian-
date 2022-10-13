import { Module} from '@nestjs/common';
import { JadwalTestService } from './jadwalTest.service';
import { JadwalTestController } from './jadwdalTest.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Clinic } from 'src/model/clinicModel';


@Module({
  imports: [SequelizeModule.forFeature([Clinic])],
  controllers: [JadwalTestController],
  providers: [JadwalTestService],
})
export class JadwalTestModule {}
