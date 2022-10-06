// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
	// title section
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
	validate: titleInput => {
		if (titleInput) {
			return true;
		} else {
			console.log("Please enter a title to continue!")
			return false;
		}
		}
	},
//   description section
  {
    type: "input",
    name: "description",
    message: "Please describe your project.",
	validate: descriptionInput => {
		if (descriptionInput) {
			return true;
		} else {
			console.log("Please enter a description to continue!")
			return false;
		}
		}
	},
// installation instructions section
  {
    type: "input",
    name: "installation",
    message: "Please describe your installation instructions.",
	validate: installationInput => {
		if (installationInput) {
			return true;
		} else {
			console.log("Please provide installation instructions to continue!")
			return false;
		}
		}
	},
	// usage information section
  {
    type: "input",
    name: "usage",
    message: "Please describe your usage information.",
	validate: usageInput => {
		if (usageInput) {
			return true;
		} else {
			console.log("Please enter information on how to ue this product to continue!")
			return false;
		}
		}
	},
	// contribution guidelines section
  {
    type: "input",
    name: "contribution",
    message: "Please describe your contribution guidelines.",
	validate: contributionInput => {
		if (contributionInput) {
			return true;
		} else {
			console.log("Please enter information on how to contribute to this project!")
			return false;
		}
		}
	},
	// test section
  {
    type: "input",
    name: "test",
    message: "Please describe your test instructions (required).",
  validate: testInput => {
	if (testInput) {
		return true;
	} else {
		console.log("Please enter your test instructions for this project to continue!")
		return false;
	}
	}
  },
//   licensing drop down section
  {
    type: "checkbox",
    name: "licensing",
    message: "Please choose a license for your project from the dropdown menu.",
	choices: [],
  validate: licensingCheckBox => {
	if (licensingCheckBox) {
		return true;
	} else {
		console.log("please select a license from the dropdown menu to continue!")
		return false;
	}
	}
  },
//   github username section
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
	validate: githubInput => {
		if(githubInput) {
			return true;
		} else {
			console.log("Please enter your GitHub username to continue!")
			return false;
		}
		}
	},
//   email input section
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
	validate: emailInput => {
		if(emailInput) {
			return true;
		} else {
			console.log("Please enter your email to continue!")
			return false;
		}
		}
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

