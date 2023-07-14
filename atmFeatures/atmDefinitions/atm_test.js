const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const ATM = require('../../atm');

let atm;
let result;

Given('that a client has a bank account And a valid debit card', function () {
  atm = new ATM();
  atm.deposit(500000); 
});


When('they request to withdraw {int} UGX from the ATM', function (amount) {
  result = atm.withdraw(amount);
});

Then('the ATM should dispense {int} UGX', function (expectedAmount) {
  assert.strictEqual(result, expectedAmount, 'The ATM did not dispense the requested amount');
});

When('they deposit {int} UGX into the ATM', function (amount) {
  atm.deposit(amount);
});

Then('{int} UGX should be added to their account balance', function (expectedAmount) {
  const expectedBalance = atm.getAccountBalance() + expectedAmount;
  atm.deposit(expectedAmount); 
  assert.strictEqual(atm.getAccountBalance(), expectedBalance, 'The deposited amount is not added to the account balance');
});