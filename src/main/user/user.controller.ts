import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Put,
  Delete,
  Version,
  Param,
  Req,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from 'src/core/gaurd/auth.gaurd';
import { UserService } from './user.service';

@Controller()
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Version('1')
  @Post('completeProfile')
  async completeProfile(@Req() req:any,  @Body() body: any) {
    try {
      console.log("in controller")
      return await this.userService.completeProfile({ body ,user:req.user});
    } catch (error) {
      throw error;
    }
  }
}

