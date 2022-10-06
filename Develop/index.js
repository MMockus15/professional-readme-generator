// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please describe your installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe your usage information.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please describe your contribution guidelines.",
  },
  {
    type: "input",
    name: "test",
    message: "Please describe your test instructions.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
  });
}

// Function call to initialize app
init();

