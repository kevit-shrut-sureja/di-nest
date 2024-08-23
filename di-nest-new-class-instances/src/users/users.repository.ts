export class UsersRepository {
  private users: { name: string }[];
  constructor() {
    this.users = [{name : 'shrut'}];
  }

  getUsers(): { name: string }[] {
    return this.users;
  }

  addUser(username){
    this.users.push({name : username})
    return true
  }
}
