import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

// @Injectable()
export class UsersService {
    private usersRepository : UsersRepository 
    constructor(usersRepository : UsersRepository){
        this.usersRepository = usersRepository
    }

    findUsers(){
        return this.usersRepository.getUsers()
    }

    addUser(username){
        return this.usersRepository.addUser(username)
    }
}
