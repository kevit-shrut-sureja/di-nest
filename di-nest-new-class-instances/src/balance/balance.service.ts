import { Injectable } from '@nestjs/common';
import { BalanceRepository } from './balance.repository';
import { UsersRepository } from 'src/users/users.repository';

// @Injectable()
export class BalanceService {
  private balanceRepository: BalanceRepository;
  private usersRepository: UsersRepository;
  constructor(balanceRepository: BalanceRepository) {
    this.balanceRepository = balanceRepository;
    this.usersRepository = new UsersRepository();
  }
  // constructor(balanceRepository : BalanceRepository, usersRepository : UsersRepository){
  //     this.balanceRepository = balanceRepository
  //     this.usersRepository = usersRepository
  // }
  getUsersBalance() {
    const balances = this.balanceRepository.getBalances();
    const users = this.usersRepository.getUsers();
    // Combine balances and users into one array
    const combined = balances.map((balanceItem, index) => ({
      ...balanceItem,
      ...users[index],
    }));

    return combined;
  }
}
