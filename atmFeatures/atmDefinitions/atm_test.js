const { Given, When, Then } = require('@cucumber/cucumber');

let clientAccountBalance = 10000;
let transactionAmount = 100;
let withdrawAmount = 5000;
let depositAmount = 1000;

Given('the client has a valid ATM card', function () {
    const isValidCard = true; // Replace this with your actual validation logic

    if (!isValidCard) {
      console.log('Invalid ATM card');
    }
    else{
      console.log('Valid ATM card');
    }
});

Given('the client has {int} UGX in their account', function (balance) {
  clientAccountBalance = balance;
});

Given('per transaction is {int} UGX', function (amount) {
  transactionAmount = amount;
});

When('the client inserts their ATM card into the machine', function () {
    let isCardInserted = true;
    console.log('ATM card inserted');
});

When('selects the Withdraw option', function () {
    let isWithdrawOptionSelected = true;
    console.log('Withdraw option selected');
});

When('enters the {int} UGX', function (amount) {
  withdrawAmount = amount;
});

Then('the ATM should dispense the requested amount', function () {
    let isAmountDispensed = true;
    console.log('Amount dispensed');
});

Then('update the client\'s account balance', function () {
  clientAccountBalance -= withdrawAmount;
  console.log('Account balance updated:', clientAccountBalance);
});

When('selects the Deposit option', function () {
    let isDepositOptionSelected = true;
    console.log('Deposit option selected');
});

When('enters the amount to deposit', function () {
    depositAmount = 1000;
    console.log('Deposit amount entered:', depositAmount);
});

When('put the amount', function () {
    let isAmountPut = true;
    console.log('Amount put into the deposit slot');
});

When('the atm count the amount', function () {
    let depositedAmount = 1000; 
    clientAccountBalance += depositedAmount;
  
    console.log('Deposited amount counted:', depositedAmount);
});

Then('the ATM should accept the deposit', function () {
    let isDepositAccepted = true;
    console.log('Deposit accepted');
});

Then('update the client\'s account balance', function () {
    let withdrawalAmount = 5000; // Replace this with your actual logic to get the withdrawal amount
    clientAccountBalance -= withdrawalAmount;
    console.log('Account balance updated:', clientAccountBalance);
});
