import { Module,CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/database/database.module';
import { ConfigJwt } from './config/jwt/Jwtmodule';
import * as redisStore from 'cache-manager-redis-store';


@Module({
  imports: [ConfigModule,CacheModule.register({
    isGlobal:true,
    store: redisStore,
    // Store-specific configuration:
    host: 'localhost',
    port: 6379,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
