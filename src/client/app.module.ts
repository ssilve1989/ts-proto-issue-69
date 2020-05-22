import { Module } from "@nestjs/common";
import path from 'path';
import { ClientProxy, ClientsModule, Transport } from "@nestjs/microservices";
import { HELLO_SERVICE } from "./app.consts";
import { AppService } from "./app.service";

@Module({
  imports: [ClientsModule.register([
    {
      name: HELLO_SERVICE,
      transport: Transport.GRPC,
      options: {
        package: 'ssilve1989.tsproto',
        protoPath: path.resolve(__dirname, '..', 'hello_service.proto'),
        url: 'localhost:5001'
      }
    }
  ])],
  providers: [AppService]
})
class AppModule { }

export { AppModule };