#! /usr/bin/env node

//Importing Inquirer
import inquirer from "inquirer";

//Importing Chalk
import chalk from "chalk";

//Printing Greetings Text with chalk
console.log(chalk.bgMagenta("\n **** Welcome To WOrds Counter CLI base Project **** ")
);

//Declare a Const "Answer"
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

//Printing the array of words and applying chalk
console.log(chalk.bgGreen(`\n ${words}`));

 //Printing the words count with chalk
console.log(chalk.blue.bold(`\n Your Sentence Words Counter Is: ${words.length}`));

//Printing Greetings Message with chalk
console.log(chalk.bgYellow("\n **** Thank you Using Words Counter **** "));
