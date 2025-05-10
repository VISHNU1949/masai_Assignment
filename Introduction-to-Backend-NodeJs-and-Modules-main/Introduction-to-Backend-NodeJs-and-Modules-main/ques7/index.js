
const crypto = require("crypto");
const args = process.argv.slice(2); 
const operation = args[0];


const isValidNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);

switch (operation) {
  case "add":
    if (args.length < 3) {
      console.log("Provide at least two numbers for addition.");
    } else {
      const result = args.slice(1).reduce((acc, val) => acc + Number(val), 0);
      console.log(`Result: ${result}`);
    }
    break;

  case "sub":
    if (args.length < 3) {
      console.log("Provide at least two numbers for subtraction.");
    } else {
      const numbers = args.slice(1).map(Number);
      const result = numbers.reduce((acc, val) => acc - val);
      console.log(`Result: ${result}`);
    }
    break;

  case "mult":
    if (args.length < 3) {
      console.log("Provide at least two numbers for multiplication.");
    } else {
      const result = args.slice(1).reduce((acc, val) => acc * Number(val), 1);
      console.log(`Result: ${result}`);
    }
    break;

  case "divide":
    if (args.length < 3) {
      console.log("Provide at least two numbers for division.");
    } else {
      const numbers = args.slice(1).map(Number);
      if (numbers.slice(1).includes(0)) {
        console.log("Cannot divide by zero.");
      } else {
        const result = numbers.reduce((acc, val) => acc / val);
        console.log(`Result: ${result}`);
      }
    }
    break;

  case "sin":
  case "cos":
  case "tan":
    if (args.length !== 2 || !isValidNumber(args[1])) {
      console.log(`Provide one valid number for ${operation}.`);
    } else {
      const angle = Number(args[1]) * (Math.PI / 180); 
      let result;
      switch (operation) {
        case "sin":
          result = Math.sin(angle);
          break;
        case "cos":
          result = Math.cos(angle);
          break;
        case "tan":
          result = Math.tan(angle);
          break;
      }
      console.log(`Result: ${result}`);
    }
    break;

  case "random":
    if (args.length !== 2 || isNaN(args[1])) {
      console.log("Provide length for random number generation.");
    } else {
      const length = Number(args[1]);
      const bytes = crypto.randomBytes(length);
      const randomNumber = bytes.toString("binary"); 
      console.log(`Random Number: ${randomNumber}`);
    }
    break;

  default:
    console.log("Invalid operation");
}
