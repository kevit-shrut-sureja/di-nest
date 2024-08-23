import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BalanceModule } from './balance/balance.module';

@Module({
  imports: [UsersModule, BalanceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
