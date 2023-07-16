
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
require("chromedriver");

let driver;
let calculator;

Given('I have opened the calculator webpage', async function () {
  // Set up Selenium WebDriver
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://127.0.0.1:5500/view/frontCal.html');

  
});

When('I enter {string} in the calculator', async function (number) {
  for (const digit of number) {
    await driver.findElement(By.css(`button[value="${digit}"]`)).click();
  }
});

When('I click the addition button', async function () {
  await driver.findElement(By.css('button[value="+"]')).click();
});

When('I click the subtraction button', async function () {
  await driver.findElement(By.css('button[value="-"]')).click();
});

When('I click the multiplication button', async function () {
  await driver.findElement(By.css('button[value="*"]')).click();
});

When('I click the division button', async function () {
  await driver.findElement(By.css('button[value="/"]')).click();
});

When('I click the remainder button', async function () {
  await driver.findElement(By.css('button[value="%"]')).click();
});

When('I click the exponential button', async function () {
  await driver.findElement(By.css('button[value="**"]')).click();
});

When('I click the equals button', async function () {
  await driver.findElement(By.css('button[value="="]')).click();
});

Then('the result should be {string} on the display', async function (expectedResult) {
  const display = await driver.findElement(By.className('display'));
  const result = await display.getAttribute('value');
  expect(result).to.equal(expectedResult);
});

After(async function () {
  // Quit the driver and close the browser
  await driver.quit();
});
