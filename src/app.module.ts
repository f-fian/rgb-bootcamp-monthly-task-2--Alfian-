import { Module,CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/database/database.module';
import { ClinicModule } from './module/cms/clinic/clinic.module';
import { AdminModule } from './module/cms/admin/admin.module';
import { Covid19Module } from './module/cms/covid19/covid19.module';
import { ClinicCovid19Module } from './module/cms/clinicCovid19/clinicCovid19.module';
import { UserModule } from './module/apps/user/user.module';
import * as redisStore from 'cache-manager-redis-store';
import { JadwalTestModule } from './module/cms/jadwalTest/jadwalTest.module';
import { ExampleModule } from './module/example/example.module';




@Module({
  imports: [ConfigModule,AdminModule,ClinicModule,Covid19Module,ClinicCovid19Module,JadwalTestModule,UserModule,ExampleModule,
    CacheModule.register({
    isGlobal:true,
    store: redisStore,
    ttl:20,
    // Store-specific configuration:
    host: 'localhost',
    port: 6379,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
