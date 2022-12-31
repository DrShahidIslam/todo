#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const ask: {todo : string} = await inquirer.prompt([
    {
        name: "todo",
        type: "input",
        message: chalk.bgBlackBright("Please enter the todo that you want to add")
    }
])
let answer = ask.todo
let todolist : string[] = [];
todolist.push(answer);
console.log(chalk.yellow("Your todo list is " + [todolist]));
