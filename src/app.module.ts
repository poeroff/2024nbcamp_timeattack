import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Account } from './account/entities/account.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {APP_FILTER} from "@nestjs/core"

import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import Joi from 'joi';
import { HttpExceptionFilter } from './middleware/Error';



const typeOrmModuleOptions = {
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: 'mysql',
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    database: configService.get('DB_NAME'),
    entities: [Account],
    synchronize: configService.get('DB_SYNC'),
    logging: true,
  }),
  inject: [ConfigService],
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET_KEY: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_NAME: Joi.string().required(),
        DB_SYNC: Joi.boolean().required(),
      }),
    }),   TypeOrmModule.forRootAsync(typeOrmModuleOptions), AccountModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },],
})
export class AppModule {}
