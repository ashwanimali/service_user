import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRouteModule } from './app_route.module';
import configuraton from './config/configuraton';
import { CoreModule } from './core/core.module';
import { DbModule } from './db/db.module';
import { AuthModule } from './main/auth/auth.module';
import { UserModule } from './main/user/user.module';

@Module({
  imports: [
    DbModule,
    AppRouteModule,
    ConfigModule.forRoot({
      isGlobal : true,
      load : [configuraton]
    }),
    CoreModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
