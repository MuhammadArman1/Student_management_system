#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let randomNumber = Math.floor(15620 + Math.random() * 900);
let myBalance = 50000;
console.log(chalk.greenBright.bold.italic(`\n                    Welcome to student\n`));
const answer = await inquirer.prompt([
    {
        name: "question1",
        type: "input",
        message: "Enter student name: ",
    },
    {
        name: "question2",
        type: "list",
        message: "Select Your Courses",
        choices: ["Frontend", "Backend", "Fullstack", "AI", "AWS"],
    },
]);
let courses = {
    Frontend: 1000,
    Backend: 2500,
    Fullstack: 4000,
    AI: 6000,
    AWS: 5500,
};
console.log("\nYour Tuition Fee: " + chalk.cyanBright(courses[answer.question2]));
console.log("\nYour Balance is: " + chalk.cyanBright(myBalance) + "\n");
const confirm = await inquirer.prompt([
    {
        name: "question3",
        type: "confirm",
        message: "Are you sure to enroll this course?",
        default: "true",
    },
]);
if (confirm.question3 === true) {
    const paymentType = await inquirer.prompt([
        {
            name: "payment",
            type: "list",
            message: "Select your payment method.",
            choices: ["Easypaisa", "Bank Transfer"],
        },
        {
            name: "Amount",
            type: "number",
            message: "Enter your amount",
        },
    ]);
    let tuitionfee = courses[answer.question2];
    let paymentAmount = parseFloat(paymentType.Amount);
    if (tuitionfee === paymentAmount) {
        console.log(chalk.green(`\nYour payment is successful.\n\nYour remaining balance is ${myBalance - paymentAmount} Rs.\n`));
        console.log(chalk.yellowBright("Thank you for enrolling in our course.\n"));
        const continues = await inquirer.prompt([
            {
                name: "continue",
                type: "list",
                message: "What would you like to do next?",
                choices: ["View status", "Exit"],
            },
        ]);
        if (continues.continue === "View status") {
            console.log(chalk.greenBright.bold("\n               View status\n"));
            console.log(`Student name:  ${answer.question1}`);
            console.log(`Student id:  ${randomNumber}`);
            console.log(`Course name:  ${answer.question2}`);
            console.log(`Tuition fee:  ${paymentAmount}`);
            console.log(`Your remaining balance is:  ${myBalance - paymentAmount}`);
        }
        else if (continues.continue === "Exit") {
            console.log(chalk.redBright("Thank you for visit in student management system "));
        }
    }
    else {
        console.log(chalk.redBright("Invalid amount due to course\n"));
    }
}
else {
    console.log(chalk.redBright("Thank you for visit in student management system "));
}
