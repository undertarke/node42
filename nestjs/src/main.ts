import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();

// yarn start => node index.js
// yarn start:dev => node --watch index.js (nodemon)

// module gốc