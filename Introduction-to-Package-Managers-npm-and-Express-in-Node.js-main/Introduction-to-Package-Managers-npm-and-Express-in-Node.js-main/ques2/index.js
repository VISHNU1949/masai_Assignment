
const chalk = require('chalk');
console.log(chalk.blue('Hello, World!'));
console.log(chalk.yellow('Learning Chalk is fun!'));

console.log(chalk.black.bgYellow('Warning! Proceed with caution.'));
console.log(chalk.white.bgRed('Error! Something went wrong.'));


console.log(chalk.green('Success:') + ' ' + chalk.white('Operation completed!'));
console.log(chalk.cyan('Loading...') + ' ' + chalk.magenta('Please wait'));


const error = chalk.bold.red;
const warning = chalk.bold.hex('#FFA500'); 
const success = chalk.bold.green;

console.log(error('Error: Unable to connect to the server!'));
console.log(warning('Warning: Low disk space!'));
console.log(success('Success: Data saved successfully!'));


console.log(chalk.underline.hex('#00FF00')('This text is underlined and green.'));
console.log(chalk.italic.rgb(255, 105, 180)('This text is italic and pink.'));
console.log(chalk.strikethrough.hex('#FF0000')('This text is strikethrough and red.'));
