// importing packages required for this app
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdownFile = require("./utils/generateMarkdown.js");

// const fileName = 'README.md';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project name?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Title is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is the goal of your project? What problem does it solve?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Description is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install the project?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Installation information is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "screenshot",
    message: "Provide a path to a screenshot image to use in ReadMe.md",
  },
  {
    type: "input",
    name: "credits",
    message:
      "Provide a list of collaborators who contributed to your project?",
  },
  {
    type: "checkbox",
    name: "technologies",
    message: "Select technologies used in your project?",
    choices: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
    type: "list",
    name: "license",
    message: "Select a licesne you wish to use",
    choices: ["MIT", "Apache 2.0", "Other"],
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(questions) {
  const generateMarkdown = generateMarkdownFile(questions);

  fs.writeFile("README.md", generateMarkdown, (err) =>
    err ? console.log(err) : console.log("Successfully generated README file")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(writeToFile);
}

// Function call to initialize app
init();
