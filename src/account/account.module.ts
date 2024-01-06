import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports : [ConfigModule.forRoot(),
  JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      secret: configService.get<string>('JWT_SECRET_KEY'),
    }),
    inject: [ConfigService],
  }),
  TypeOrmModule.forFeature([Account]), ],
  controllers: [AccountController],
  providers: [AccountService],
  exports : [AccountService]
})
export class AccountModule {}
