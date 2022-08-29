// Add requirements
const inquirer = require(`inquirer`);
const fs = require(`fs`);

const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const generateHTML = require(`./src/generateHTML`);

const teamMembers = [];

// Questions, validations, if statements for Inquirer
const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Team Manager's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Employee name is required`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Employee ID is required`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee email address",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Email address is required`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter office number",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log(`Office number is required`);
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptOptions();
    });
};

const promptOptions = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What would you like to do next?",
        choices: ["Add Engineer", "Add Intern", "Finish building my team"],
      },
    ])
    .then((optionChoice) => {
      switch (optionChoice.options) {
        case "Add Engineer":
          promptEngineer();
          break;
        case "Add Intern":
          promptIntern();
          break;
        default:
          generateTeam();
      }
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Engineer's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Employee name is required`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Employee ID is required`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee email address",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Email address is required`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter github username",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log(`Github username is required`);
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptOptions();
    });
};

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "Enter intern's school",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log(`School is required`);
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptOptions();
    });
};
const generateTeam = () => {
  fs.writeFile("team.html", generateHTML(teamMembers), (err) =>
    err ? console.log(err) : console.log("Successfully created Team Profile!")
  );
};

promptManager();
