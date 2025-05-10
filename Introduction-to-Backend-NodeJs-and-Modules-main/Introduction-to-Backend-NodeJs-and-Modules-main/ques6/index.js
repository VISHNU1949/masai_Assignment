
const sum = require("./sum");
const multiply = require("./multiplication");
const subtract = require("./subtraction");
const divide = require("./division");

const args = process.argv.slice(2); 
const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

switch (operation) {
  case "sum":
    console.log(`Sum: ${sum(num1, num2)}`);
    break;
  case "multiply":
    console.log(`Multiplication: ${multiply(num1, num2)}`);
    break;
  case "subtract":
    console.log(`Subtraction: ${subtract(num1, num2)}`);
    break;
  case "divide":
    try {
      console.log(`Division: ${divide(num1, num2)}`);
    } catch (error) {
      console.error(`Division error: ${error.message}`);
    }
    break;
  default:
    console.log("Invalid operation. Please use 'sum', 'multiply', 'subtract', or 'divide'.");
    break;
}
