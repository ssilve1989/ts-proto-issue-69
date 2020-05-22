import { Controller, Logger } from "@nestjs/common";
import { HelloServiceControllerMethods, HelloServiceController } from "../generated/hello_service";
import { HelloRequest } from "../generated/hello_request";
import { of } from "rxjs";

@Controller()
@HelloServiceControllerMethods()
class AppController implements HelloServiceController {
  private readonly logger = new Logger(AppController.name);

  sayHello(request: HelloRequest) {
    this.logger.log(`Received request from: ${request.name || 'unknown'}`)
    return of({ reply: `Hello ${request.name}`})
  }
}

export { AppController }