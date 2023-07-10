 class Calculator {
    constructor() {
      this.number1 = 10;
      this.number2 = 5;
    }
  
    enterNumber(number) {
      if (this.number1 === 0) {
        this.number1 = number;
      } else {
        this.number2 = number;
      }
    }
  
    add() {
      return this.number1 + this.number2;
    }
  
    subtract() {
      return this.number1 - this.number2;
    }
  
    multiply() {
      return this.number1 * this.number2;
    }
  
    divide() {
      return this.number1 / this.number2;
    }
  }
  
  module.exports = Calculator;