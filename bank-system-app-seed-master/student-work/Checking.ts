import {Transaction} from "../common/interfaces/Transaction";
import {AccountType} from "../common/enums/AccountType";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import {BankAccount} from "./BankAccount";

export class CheckingAccount extends BankAccount {

    constructor(currentdate) {
        super(currentdate);
        this.balance = 1000;
    }

    advanceDate(days) {
        super.calcInterest(days, .01);
    }
}

