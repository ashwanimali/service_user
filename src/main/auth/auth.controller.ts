import {
  Controller,
  Post,
  Body,
  Version,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Version('1')
  @Post('sendotp')
   sendOtp(@Body() body: any) {
    try {
      console.log('in send otp',body);
      return  this.authService.sendOtp(body);
    } catch (error) {
      throw error;
    }
  }

  @Version('1')
  @Post('create')
  async createUser(@Body() body: any) {
    try {
      return await this.authService.createUser({ body });
    } catch (error) {
      throw error;
    }
  }
}

