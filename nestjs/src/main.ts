import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors() // mở CORS
  app.use(express.static(".")) //định vị lại đường load file

  const config = new DocumentBuilder().setTitle("node 42").addBearerAuth().build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/swagger", app, document)

  await app.listen(8080);
}
bootstrap();

// yarn start => node index.js
// yarn start:dev => node --watch index.js (nodemon)

// module gốc

// yarn add @nestjs/swagger swagger-ui-express