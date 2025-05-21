import * as dotenv from 'dotenv';
import * as expressLayouts from 'express-ejs-layouts';
import { dirname, resolve } from 'path';

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const baseDir = dirname(__dirname);
  app.setBaseViewsDir(resolve(baseDir, 'views'));
  app.useStaticAssets(resolve(baseDir, 'public'));
  app.setViewEngine('ejs');

  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.use(expressLayouts);
  expressApp.set('layout', 'layouts/default');
  const PORT = process.env.PORT;
  await app.listen(PORT!, () => {
    console.log(`The app is listening on http://localhost:${PORT}`);
  });
}
bootstrap();
