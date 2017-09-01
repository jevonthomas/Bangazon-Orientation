const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

let moreStarsRow = (chalk.bgBlue(" * * * * * * * ") + chalk.bgRed("                                 "));
let lessStarsRow = (chalk.bgBlue("  * * * * * *  ") + chalk.bgWhite("                                 "));
let fullRedRow = (chalk.bgRed("                                                "));
let fullWhiteRow = (chalk.bgWhite("                                                "));

for (var i = 0; i < 2; i++) {
    console.log(moreStarsRow);
    console.log(lessStarsRow);
};

console.log(moreStarsRow);

for (var i = 0; i < 3; i++) {
    console.log(fullWhiteRow);
    console.log(fullRedRow);
}; 