import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { DbModule } from 'src/db/db.module';
import { HttpExceptionFilter } from './filters/http_exceptions.filter';

import { TransformInterceptor } from './interceptors/transform.interceptor';
import { CommonService } from './services/common.service';
import { HelperService } from './services/helper.service';
import { HttpRequestService } from './services/http_request.service';
import { QueryService } from './services/query.service';

@Module({
  imports: [JwtModule.register({}), HttpModule, DbModule],
  providers: [
    
    CommonService,
    QueryService,
    HelperService,
    HttpRequestService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
  exports: [
    CommonService,
    QueryService,
    HelperService,
    HttpRequestService,
  ],
})
export class CoreModule {}
