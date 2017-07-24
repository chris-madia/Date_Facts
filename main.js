const moment = require("./node_modules/moment");
const chalk = require("./node_modules/chalk");

console.log(
  "it is " + chalk.yellow(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
);

console.log(
  "it is the " + chalk.red(moment().format("DDD")) + "th day of the year"
);

console.log(
  "it is " + chalk.green(moment().format("SSSS") + " seconds into the day")
);

if (moment(["YYYY"]).isLeapYear() === true) {
  console.log("it " + chalk.cyan("is") + " a leap year");
} else {
  console.log("it is " + chalk.blue("not") + " a leap year");
}
if (moment(["LL"]).isDST() === true) {
  console.log("It " + chalk.magenta("is") + " Day light savings time");
} else {
  console.log("It " + chalk.black("is not") + " daylight savings time");
}
