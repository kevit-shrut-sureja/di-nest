import { Controller, Get } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller('balance')
export class BalanceController {
    
    constructor(private balanceServices : BalanceService){
        console.log('BalanceController instance is created')
    }
    @Get()
    getBalance(){
        return this.balanceServices.getUsersBalance()
    }
}
