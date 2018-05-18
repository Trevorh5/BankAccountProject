import {BankAccount} from "./BankAccount";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";

export class SavingAccount extends BankAccount {
    withdrawals: number = 0;

    constructor(currentdate) {
        super(currentdate);
        this.balance = 10000;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {

        //set withdrawal count based on phone or web origins
        if(transactionOrigin === 1 || transactionOrigin === 2) {
            this.withdrawals++;
        }

        //checking if there has been more than six transactions
        if(this.withdrawals <= 6) {

            return super.withdrawMoney(amount, description, transactionOrigin);
        } else {
            return {
                success: false,
                amount: -amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: description,
                errorMessage: "Can only withdraw money 6 times per month from web or phone",
                transactionOrigin: transactionOrigin
            }
        }
    }

    advanceDate(days: number) {

        //storing current month to watch for change
        let OGmonth = this.currentDate.getMonth();
        super.calcInterest(days, .02);

        //checking if the month has changed
        if(this.currentDate.getMonth() !== OGmonth){
            this.withdrawals = 0;
        }
    }
}