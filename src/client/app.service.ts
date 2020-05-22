import { Injectable, OnApplicationBootstrap, Inject, Logger } from "@nestjs/common";
import { HELLO_SERVICE } from "./app.consts";
import { ClientProxy, ClientGrpc } from "@nestjs/microservices";
import { HelloServiceClient } from "../generated/hello_service";
import { interval } from "rxjs";

@Injectable()
class AppService implements OnApplicationBootstrap {
  private readonly service: HelloServiceClient;
  private readonly logger = new Logger(AppService.name);

  constructor(@Inject(HELLO_SERVICE) private readonly clientProxy: ClientGrpc) {
    this.service = this.clientProxy.getService('HelloService');
  }

  onApplicationBootstrap() {
    interval(1000).subscribe(value => 
      this.service.sayHello({ name: value.toString() }).subscribe(response => this.logger.log(response.reply))
    );
  }
}

export { AppService };