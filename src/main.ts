import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './middleware/Error';

const  cookieParser = require('cookie-parser')
const csurf =  require('csurf')
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true ,whitelist : true}));
 
  
  app.useGlobalFilters(new HttpExceptionFilter());


  
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept , Authorization , X-XSRF-TOKEN',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
