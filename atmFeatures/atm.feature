Feature: Transact money at ATM
  As a bank owner
  I want to increase my clients' interactions with their accounts by introducing ATMs.

  Rule: 
    ATM Transactions

  Background:
    Given that a client has a bank account And a valid debit card

  @secondwithdrawal
  Scenario: Withdraw money from ATM
    When they request to withdraw 500000 UGX from the ATM
    Then the ATM should dispense 500000 UGX

  @seconddeposit
  Scenario: Deposit money to ATM
    When they deposit 500000 UGX into the ATM
    Then 500000 UGX should be added to their account balance