import inquirer from "inquirer";
import chalk from "chalk";
const ask = await inquirer.prompt([
    {
        name: "todo",
        type: "input",
        message: chalk.bgBlackBright("Please enter the todo that you want to add")
    }
]);
let answer = ask.todo;
let todolist = [];
todolist.push(answer);
console.log(chalk.yellow("Your todo list is " + [todolist]));
