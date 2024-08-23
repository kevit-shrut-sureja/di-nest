export class UsersRepository {
  private users: { name: string }[];
  constructor() {
    this.users = [{name : 'shrut'}];
    console.log('UsersRepository instance is created')
  }

  getUsers(): { name: string }[] {
    return this.users;
  }

  addUser(username){
    this.users.push({name : username})
    return true
  }
}
