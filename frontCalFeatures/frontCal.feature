Feature: Front_end Calculator
  In order to perform calculations
  As a user
  I want to be able to add, subtract, multiply, divide, exponential and remain numbers


  Background:
    Given I have entered the number 10 into the calculator
    Given I have entered the number 5 into the calculator


  @add
  Scenario: Add two numbers
    When I press the addition button
    Then the result should be 15 on the screen

  @subtract
  Scenario:
    When I press the subtraction button
    Then the result should be 5 on the screen
    
  @multiply
  Scenario:
    When I press the multiplication button
    Then the result should be 50 on the screen


  @divide
  Scenario:
    When I press the division button
    Then the result should be 2 on the screen

  @remainer
  Scenario:
    When I press the remainer button
    Then the result should be 0 on the screen

  @exponential
  Scenario:
    When I press the exponential button
    Then the result should be 100000 on the screen