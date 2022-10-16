import { Module} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from 'src/model/adminModel';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
  imports: [SequelizeModule.forFeature([Admin])],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
