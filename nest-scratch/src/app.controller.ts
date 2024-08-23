import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getRootRoute() : string {
        return "This is nestjs backend..."
    }
}
