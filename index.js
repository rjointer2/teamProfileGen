const Manager = require("./classFunctions/Manager");
const Engineer = require("./classFunctions/Engineer");
const Intern = require("./classFunctions/Intern");
const createEmployee = require("./classFunctions/createEmployee");
const inquirer = require("inquirer");
const {questions, questionsManager} = require("./classFunctions/questions");
const path = require("path");
const fs = require("fs");

const newDIR = path.resolve(__dirname, "output");
const outputPath = path.join(newDIR, "new.html");

const render = require("./classFunctions/makeHTML");

const array = [];
async function init(question) {
    const person = await inquirer.prompt(question);
    const newEmp = createEmployee(person);
    array.push(newEmp);
    if (person.another) init(questions);
    else {
        const template = render(array);
        fs.writeFile(outputPath, template, (err) => 
        err ? console.log(err) : console.log("Success"));
    }
}
init(questionsManager);