// import { Injectable } from "@nestjs/common";

// @Injectable()
export class BalanceRepository{
    private balance : Array<{ balance: number }>
    constructor(){
        console.log('BalanceRepository instance is created')
        this.balance = [{balance : 123}];
    }

    getBalances() : Array<{ balance: number }>{
        return this.balance;
    }
}