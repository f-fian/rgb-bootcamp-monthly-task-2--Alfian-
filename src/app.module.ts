import { Module,CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/database/database.module';
import { ClinicModule } from './module/cms/clinic/clinic.module';
import { AdminModule } from './module/cms/admin/admin.module';
import * as redisStore from 'cache-manager-redis-store';


@Module({
  imports: [ConfigModule,AdminModule,ClinicModule,
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
