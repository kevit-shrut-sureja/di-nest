import { Controller, Get } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceRepository } from './balance.repository';

@Controller('balance')
export class BalanceController {
    private balanceServices : BalanceService
    constructor(){
        this.balanceServices = new BalanceService(new BalanceRepository())
        console.log('BalanceService instance is created')
    }
    @Get()
    getBalance(){
        return this.balanceServices.getUsersBalance()
    }
}
