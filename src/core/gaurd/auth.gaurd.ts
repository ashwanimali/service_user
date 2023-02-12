import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import {
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common/exceptions';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { QueryService } from '../services/query.service';
import UserModel from 'src/db/models/user.model';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly queryService: QueryService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('now');
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
  async validateRequest(request: any) {
    try {
      console.log('now 1');

      let condition = {
        isDeleted: false,
      };
      if (!request.headers.authorization)
        throw new BadRequestException('Please Send Authorization Token');
      console.log('now2');

      const token = request.headers.authorization.split(' ');
      console.log('now3');

      if (token[0] != 'saktimaan') {
        throw new BadRequestException('Not Our Authorization Token');
      }
      console.log('now4');

      const authToken = token[1];
      const JWT_KEY = this.configService.get('JWT_KEY');
      const data = await this.jwtService.verifyAsync(authToken, {
        secret: JWT_KEY,
      });
      console.log('now4', data);

      if (data._id) {
        const user = await this.queryService.findOne({
          modelName: UserModel,
          condition: {...condition, _id: data._id },
        });
        console.log('in now ', user , user._id);
        if (!Object.keys(user).length || !user._id ) return false;
        console.log({ user });
        request.user = user;
        return true;
      }
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
