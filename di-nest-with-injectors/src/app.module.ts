import { Module } from '@nestjs/common';
import { BalanceModule } from './balance/balance.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BalanceModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
