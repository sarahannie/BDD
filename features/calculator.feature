Feature: Calculator
  In order to perform calculations
  As a user
  I want to be able to add, subtract, multiply, and divide numbers

  Scenario: Add two numbers
    Given I have entered the number 10 into the calculator
    And I have entered the number 5 into the calculator
    When I press the addition button
    Then the result should be 15 on the screen

  Scenario: Subtract two numbers
    Given I have entered the number 10 into the calculator
    And I have entered the number 5 into the calculator
    When I press the subtraction button
    Then the result should be 5 on the screen

  Scenario: Multiply two numbers
    Given I have entered the number 10 into the calculator
    And I have entered the number 5 into the calculator
    When I press the multiplication button
    Then the result should be 50 on the screen

  Scenario: Divide two numbers
    Given I have entered the number 10 into the calculator
    And I have entered the number 5 into the calculator
    When I press the division button
    Then the result should be 2 on the screen
