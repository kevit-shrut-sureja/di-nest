import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {
    console.log('UsersService instance is created');
  }

  findUsers() {
    return this.usersRepository.getUsers();
  }

  addUser(username) {
    return this.usersRepository.addUser(username);
  }

  getAllUsers(){
    return this.usersRepository.getUsers();
  }
}
