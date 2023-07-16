Feature: Frontend Calculator
  In order to perform calculations
  As a user
  I want to be able to add, subtract, multiply, divide, calculate exponential, and get the remainder

  Background:
    Given I have opened the calculator webpage

  Scenario: Add two numbers
    When I enter "20" in the calculator
    And I click the addition button
    And I enter "5" in the calculator
    And I click the equals button
    Then the result should be "25" on the display

  Scenario: Subtract two numbers
    When I enter "10" in the calculator
    And I click the subtraction button
    And I enter "5" in the calculator
    And I click the equals button
    Then the result should be "5" on the display

  Scenario: Multiply two numbers
    When I enter "10" in the calculator
    And I click the multiplication button
    And I enter "5" in the calculator
    And I click the equals button
    Then the result should be "50" on the display

  Scenario: Divide two numbers
    When I enter "10" in the calculator
    And I click the division button
    And I enter "5" in the calculator
    And I click the equals button
    Then the result should be "2" on the display

  Scenario: Get the remainder of two numbers
    When I enter "10" in the calculator
    And I click the remainder button
    And I enter "5" in the calculator
    And I click the equals button
    Then the result should be "0" on the display

  Scenario: Calculate exponential of a number
    When I enter "10" in the calculator
    And I click the exponential button
    And I enter "5" in the calculator
    And I click the equals button
    Then the result should be "100000" on the display
