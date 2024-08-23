export class BalanceRepository{
    private balance : Array<{ balance: number }>
    constructor(){
        this.balance = [{balance : 123}];
    }

    getBalances() : Array<{ balance: number }>{
        return this.balance;
    }
}