import { VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ http2: true }),
  );
  const configService = app.get(ConfigService);
  const port = configService.get("port");
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(port);
  console.log("Running SuccessFully.on port : ", port)
}
bootstrap();
