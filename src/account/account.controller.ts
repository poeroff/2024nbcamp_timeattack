import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, UseFilters, All, Res, HttpException } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';

import { AuthGuard } from '@nestjs/passport';
import { LoginAccountDto } from './dto/Login-acctount.dto';
import { UserInfo } from 'src/utils/userinfo.decorator';
import { userAccountDto } from './dto/user-account.dto';
import { request } from 'http';
import { HttpExceptionFilter } from 'src/middleware/Error';
import { Serialze } from 'src/interceptors/serialize.interceptor';
import { CreateDto } from './dto/create.dto';


@Controller('account')
@UseFilters(HttpExceptionFilter)

export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('register')
   @Serialze(CreateDto)
  async register(@Body() loginDto: CreateAccountDto) {
  
    return await this.accountService.register(loginDto.email, loginDto.password, loginDto.name, loginDto.phonenumber);
   
  }

  @Post('login')
  async login(@Body() loginDto: LoginAccountDto) {
   
      return await this.accountService.login(loginDto.email, loginDto.password);
     
   
   
 

  }
  

  @Get("check")
  check(@UserInfo() user : userAccountDto){
    return { email: user.email };
  }

}
