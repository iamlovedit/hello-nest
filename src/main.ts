import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { notFound } from './not-found.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(notFound);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
