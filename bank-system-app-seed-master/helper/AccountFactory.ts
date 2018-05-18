import {Account} from "../common/interfaces/Account";
import {CheckingAccount} from "../student-work/Checking";
import {RetirementAccount} from "../student-work/Retirement";
import {SavingAccount} from "../student-work/Savings";
//import {BankAccount} from "../student-work/BankAccount";

export class AccountFactory {

    static getCheckingAccountObject(currentDate: Date): Account {
        return new CheckingAccount(currentDate);
    }

    static getSavingsAccountObject(currentDate: Date): Account {
        return new SavingAccount(currentDate);
    }

    static getRetirementAccountObject(currentDate: Date, accountHolderBirthDate: Date): Account {
        return new RetirementAccount(currentDate, accountHolderBirthDate);
    }

}
