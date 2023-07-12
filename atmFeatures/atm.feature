Feature: Transact money at ATM
    As a Bank Owner
    I want to increase my Clients interactions with their accounts by introducing ATMs
    Background:
        Given the client has a valid ATM card

    Scenario:Withdraw money from ATM
        And the client has 10000 UGX in their account
        And per transaction is 100 UGX
        When the client inserts their ATM card into the machine
        And selects the Withdraw option
        And enters the 5000 UGX
        Then the ATM should dispense the requested amount
        And update the client's account balance


    Scenario:Deposit money into ATM
        When the client inserts their ATM card into the machine
        And selects the Deposit option
        And enters the amount to deposit
        When put the amount
        And the atm count the amount
        Then the ATM should accept the deposit
        And update the client's account balance