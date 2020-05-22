import { NestFactory } from '@nestjs/core';
import path from 'path';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'ssilve1989.tsproto',
      protoPath: path.resolve(__dirname, '..', 'hello_service.proto'),
      url: 'localhost:5001'
    }
  });

  await app.listenAsync();
}
bootstrap();