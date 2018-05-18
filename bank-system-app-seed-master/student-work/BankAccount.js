"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        if (amount <= this.balance) {
            return {
                success: true,
                amount: -amount,
                resultBalance: this.balance -= amount,
                transactionDate: this.currentDate,
                description: "Pulled out $" + amount,
                errorMessage: "",
            };
        }
        else if (amount > this.balance) {
            return {
                success: false,
                amount: -amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: "Failed",
                errorMessage: "Not enough Money",
                transactionOrigin: transactionOrigin
            };
        }
    };
    BankAccount.prototype.depositMoney = function (amount, description) {
        return undefined;
    };
    BankAccount.prototype.advanceDate = function (numberOfDays) {
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
