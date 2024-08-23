import { Module } from '@nestjs/common';
import { BalanceController } from './balance.controller';
import { BalanceService } from './balance.service';
import { BalanceRepository } from './balance.repository';
import { UsersRepository } from 'src/users/users.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports : [UsersModule],
  controllers: [BalanceController],
  providers: [BalanceService, BalanceRepository]
})
export class BalanceModule {
  constructor(){
    console.log('BalanceModule instance is created')

  }
}
