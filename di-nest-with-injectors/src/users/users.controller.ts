import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService){
        console.log('UsersController instance is created')
    }
    @Get()
    findUsers(){
        return this.userService.findUsers()
    }
    @Post()
    addUsers(@Body('username') username){
        return this.userService.addUser(username)
    }
    @Get('/all')
    getAllUsers(){
        return this.userService.getAllUsers()
    }
}
