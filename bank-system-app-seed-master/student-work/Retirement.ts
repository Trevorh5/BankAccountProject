import {BankAccount} from "./BankAccount";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";

export class RetirementAccount extends BankAccount {

    constructor(currentdate, birthDate) {
        super(currentdate);
        this.balance = 100000;
        this.accountHolderBirthDate = birthDate;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {

        let cutOff = new Date(1958, 5, 18);

        if(this.accountHolderBirthDate >= cutOff){
            amount *= 1.1;
        }
        return super.withdrawMoney(amount, description, transactionOrigin);
    }

    advanceDate(days) {
        super.calcInterest(days, .03);
    }
}