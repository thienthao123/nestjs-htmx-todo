import { NestFactory } from '@nestjs/core';
import * as hbs from 'hbs';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(`${join(__dirname, '..', 'views', 'partials')}/*.hbs`);

  await app.listen(3000);
}
bootstrap();
