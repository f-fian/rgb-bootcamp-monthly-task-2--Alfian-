import { Module} from '@nestjs/common';
import { JadwalService } from './jadwal.service';
import { JadwalController } from './jadwal.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Jadwal } from 'src/model/jadwalModel';


@Module({
  imports: [SequelizeModule.forFeature([Jadwal])],
  controllers: [JadwalController],
  providers: [JadwalService],
})
export class JadwalModule {}
