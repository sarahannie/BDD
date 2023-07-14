class ATM {
    constructor() {
      this.accountBalance = 0;
    }
  
    deposit(amount) {
      this.accountBalance += amount;
    }
  
    withdraw(amount) {
      if (this.accountBalance >= amount) {
        this.accountBalance -= amount;
        return amount;
      } else {
        throw new Error('Insufficient funds');
      }
    }  
  
    getAccountBalance() {
      return this.accountBalance;
    }
  }
  
  module.exports = ATM;