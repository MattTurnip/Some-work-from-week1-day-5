var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var message2 = "Hello " + chalk.cyan("World");
var shinyText = chalk.bold.magenta.bgCyanBright.inverse;
console.log(message);
console.log(message2);
console.log(shinyText('hello'));