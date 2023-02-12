import { Injectable } from '@nestjs/common';
import UserModel from 'src/db/models/user.model';
import { CommonService } from 'src/core/services/common.service';
import { QueryService } from 'src/core/services/query.service';

import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
require('dotenv').config();

@Injectable()
export class UserService {
  constructor(
    private readonly commonSerive: CommonService,
    private readonly queryService: QueryService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async completeProfile({
    body,
    user,
  }: {
    body: any;
    user: any;
  }): Promise<any> {
    return await this.queryService.update({
      modelName : UserModel,
      data : body,
      id : user._id
    })
  }
}
