// Add requirements
const inquirer = require("inquirer");
const fs = require(`fs`);

const Employee = require(`./lib/Employee`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const generateHTML = require(`./src/generateHTML`);

// Questions, validations, if statements for Inquirer
const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter team manager's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter manager's employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter manager's email address",
        name: "email",
      },
      {
        type: "input",
        message: "Enter manager's office number",
        name: "officeNumber",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        name: "nextQuestion",
        choices: ["Add Engineer", "Add Intern", "Finish building my team"],
      },
      {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i",
      },
      {
        type: "input",
        message: "What command should be used to run tests?",
        name: "tests",
        default: "npm run test",
      },
      {
        type: "input",
        message: "What does the user need to know about using the repository?",
        name: "usage",
      },
      {
        type: "input",
        message:
          "What does the user need to know about contributing to the repository?",
        name: "contribute",
      },
    ])
    .then((answers) => {
      fs.writeFile("team.html", generateHTML(answers), (err) =>
        err
          ? console.log(err)
          : console.log("Successfully created Team Profile!")
      );
    });
};

PromptManager();
