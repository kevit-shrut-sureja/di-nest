// import { Injectable } from "@nestjs/common";

// @Injectable()
export class UsersRepository {
  private users: { name: string }[];
  constructor() {
    console.log('UsersRepository instance is created');
    this.users = [{ name: 'shrut' }];
  }

  getUsers(): { name: string }[] {
    console.log(this.users);
    
    return this.users;
  }

  addUser(username) {
    this.users.push({ name: username });
    return true;
  }
}
