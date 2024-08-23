import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';

@Controller('users')
export class UsersController {
    private userService : UsersService
    constructor(){
        this.userService = new UsersService(new UsersRepository())
    }
    @Get()
    findUsers(){
        return this.userService.findUsers()
    }
    @Post()
    addUsers(@Body('username') username){
        return this.userService.addUser(username)
    }
}
