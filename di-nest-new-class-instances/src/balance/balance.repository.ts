export class BalanceRepository{
    private balance : Array<{ balance: number }>
    
    constructor(){
        this.balance = [{balance : 123}];
        console.log('BalanceRepository instance is created')
        
    }

    getBalances() : Array<{ balance: number }>{
        return this.balance;
    }
}