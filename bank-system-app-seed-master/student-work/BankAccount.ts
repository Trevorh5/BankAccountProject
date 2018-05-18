import {Account} from "../common/interfaces/Account";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";

export class BankAccount implements Account{

    currentDate: Date;
    balance: number;
    accountHistory: Transaction[];
    accountHolderBirthDate: Date;

    constructor(currentdate) {
        this.currentDate = currentdate;
        this.accountHistory = [];
    }

     withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        if(amount <= this.balance) {
            let trans = {
                success: true,
                amount: -amount,
                resultBalance: this.balance -= amount,
                transactionDate: this.currentDate,
                description: `Pulled out $${amount}`,
                errorMessage: "",

            };
            this.accountHistory.push(trans);
            return trans;
        }
        else if (amount > this.balance) {
            let trans = {
                success: false,
                amount: -amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: description,
                errorMessage: "Not enough Money",
                transactionOrigin: transactionOrigin
            };
            this.accountHistory.push(trans);
            return trans;
        }
    }

    depositMoney(amount: number, description: string): Transaction {
        let trans = {
            success: true,
            amount: amount,
            resultBalance: this.balance += amount,
            transactionDate: this.currentDate,
            description: description,
            errorMessage: "",
        };

        this.accountHistory.push(trans);
        return trans;
    }

    //blank, logic is in extended members
    advanceDate(numberOfDays: number) {
    }

    //advance one day at a time to watch for first of month
    calcInterest(numberOfDays: number, rate: number) {
        for(let i = 1; i <= numberOfDays; i++) {

            this.currentDate.setDate(this.currentDate.getDate() + 1);

            //if the day of month = 1, deposit monthly interest
            if (this.currentDate.getDate() === 1) {
                //calculate interest based off rate, truncate to two decimals
                let deposit = this.balance * rate / 12;
                this.depositMoney(+deposit.toFixed(2), "Monthly Interest");
            }
        }
    }
}