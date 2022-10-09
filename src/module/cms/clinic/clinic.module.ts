import { Module} from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Clinic } from 'src/model/clinicModel';


@Module({
  imports: [SequelizeModule.forFeature([Clinic])],
  controllers: [ClinicController],
  providers: [ClinicService],
})
export class ClinicModule {}
