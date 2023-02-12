import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponseConfig } from 'src/config/http_response.config';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    return next.handle().pipe(
      map((res) => {
        const data = {
          ...HttpResponseConfig[response.statusCode],
          data: res,
        };
        request.response = data;
        return data;
      }),
    );
  }
}
