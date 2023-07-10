const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const Calculator = require('../../calculator');

let calculator;
let result;

Given('I have entered the number {int} into the calculator', function (number) {
  calculator = new Calculator();
  calculator.enterNumber(number);
});

When('I press the addition button', function () {
  result = calculator.add();
});

When('I press the subtraction button', function () {
  result = calculator.subtract();
});

When('I press the multiplication button', function () {
  result = calculator.multiply();
});

When('I press the division button', function () {
  result = calculator.divide();
});

Then('the result should be {int} on the screen', function (expectedResult) {
  assert.strictEqual(result, expectedResult);
});

