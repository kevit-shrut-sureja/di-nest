import { Injectable } from '@nestjs/common';
import { BalanceRepository } from './balance.repository';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class BalanceService {
  constructor(
    private balanceRepository: BalanceRepository,
    private usersRepository: UsersRepository,
  ) {
    console.log('BalanceService instance is created')
  }
  getUsersBalance() {
    const balances : any = this.balanceRepository.getBalances();
    const users = this.usersRepository.getUsers();
    // Combine balances and users into one array
    const combined = balances.concat(users)

    return combined;
  }
}
