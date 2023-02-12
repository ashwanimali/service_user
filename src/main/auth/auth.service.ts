import { Injectable } from '@nestjs/common';
import UserModel from 'src/db/models/user.model';
import { CommonService } from 'src/core/services/common.service';
import { QueryService } from 'src/core/services/query.service';

import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
require('dotenv').config();

@Injectable()
export class AuthService {
  constructor(
    private readonly commonSerive: CommonService,
    private readonly queryService: QueryService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  sendOtp({ body }: { body: any }) {
    console.log('in sendotp');
    return 'Otp Send SuccessFully';
  }

  async generateToken({ mobile=null, _id =null}: { mobile: number; _id: number }) {
    const payload = { mobile, _id };
    const JWT_KEY = this.configService.get('JWT_KEY');
    return await this.jwtService.signAsync(payload, {
      secret: JWT_KEY,
      expiresIn: '365d',
    });
  }

  async createUser({ body }: { body: any }): Promise<any> {
    console.log('in user create');
    const check = await this.queryService.findOne({
      modelName: UserModel,
      condition: { mobile: body.mobile },
    });
    if (check) {
      const token = await this.generateToken({
        mobile: check.mobile,
        _id: check._id,
      });
      check['token'] = token;
      await this.commonSerive.update({
        modelName: UserModel,
        data: { token },
        id: check._id,
      });
      return { user: check, alreadyExists: true };
    }

    const newUser = await this.commonSerive.create({
      modelName: UserModel,
      body,
    });
    const token = await this.generateToken({
      mobile: newUser.mobile,
      _id: newUser._id,
    });
    newUser['token'] = token;
    await this.commonSerive.update({
      modelName: UserModel,
      data: { token },
      id: newUser._id,
    });
    return { user: newUser, alreadyExists: false };
  }

  async getUserByToken(token) {
    console.log({ token });
  }

  async getUser({ id, query }: { id: string; query: any }): Promise<any> {
    return await this.commonSerive.get({
      modelName: UserModel,
      id,
      query,
    });
  }

  updateUser({
    id,
    query,
    body,
  }: {
    id: any;
    query: any;
    body: any;
  }): Promise<any> {
    return this.commonSerive.update({
      modelName: UserModel,
      id,
      query,
      data: body,
    });
  }

  deleteUser({ id, query }: { id: any; query: any }): Promise<any> {
    return this.commonSerive.delete({
      modelName: UserModel,
      id,
      query,
    });
  }
}
