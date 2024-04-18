import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.bgMagenta("\n **** Welcome To WOrds Counter CLI base Project **** ")
);

const answers: {
  sentence: string;
} = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: chalk.yellow.bold("\n Please Enter your Sentence to Count the Word.")
  }
]);

const words = answers.sentence.trim().split(" ");

console.log(chalk.bgGreen(`\n ${words}`));

console.log(chalk.blue.bold(`\n Your Sentence Words Counter Is: ${words.length}`));

console.log(chalk.bgYellow("\n **** Thank you Using Words Counter **** "));
