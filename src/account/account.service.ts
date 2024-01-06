import { ConflictException, Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import _ from "lodash"
import {compare ,hash} from "bcrypt"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccountService {
  constructor(@InjectRepository(Account) private accountRepository : Repository<Account>,  private  jwtService: JwtService,){}
  async register(email: string, password: string, name:string , phonenumber : string) {
    const user = await this.accountRepository.findOne({where : {email : email}})
    if(user){
      throw new ConflictException("이미 해당 이메일로 가입된 사용자가 있습니다!")
    }
    const hasherpassword = await hash(password,12);

    return await this.accountRepository.save({email,password : hasherpassword,name,phonenumber})
  
  }

  async login(email: string, password: string) {
    const user = await this.accountRepository.findOne({where :{email : email }})
    if(!user){
      throw new UnauthorizedException("등록되지 않은 이메일입니다")
    }
    if (!(await compare(password, user.password))) {
      throw new UnauthorizedException('비밀번호를 확인해주세요.');
    }

    const payload = {id : user.id , email }
    return {
      access_token: this.jwtService.sign(payload),
    };
   
  }

  async findByEmail(email: string) {
    return await this.accountRepository.findOneBy({ email });
  }
}
