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
    message: "What is the name of your project? (required)",
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
    message: "Please describe your project. (required)",
	validate: descriptionInput => {
		if (descriptionInput) {
			return true;
		} else {
			console.log("Please enter a description to continue!")
			return false;
		}
		}
	},

// installation instructions confirm and section
  {
	type: "confirm",
	name: "installationConfirm",
	message: "Is there an installation process you'd like to add?",
  },
  {
    type: "input",
    name: "installation",
    message: "Please describe your installation instructions.",
	when: ({ installationConfirm }) => {
		if (installationConfirm) {
			return true;
		} else {
			return false;
		}
		}
	},

	// usage information confirm and section
	{
		type: "confirm",
		name: "usageConfirm",
		message: "Would you like to provide instructions on how to use your application?",
	},
  {
    type: "input",
    name: "usage",
    message: "Please describe your usage information.",
	when: ({usageConfirm}) => {
		if (usageConfirm) {
			return true;
		} else {
			return false;
		}
		}
	},

	// contribution guidelines section
	{
		type: "confirm",
		name: "contributionConfirm",
		message: "Would you like to allow other developers to contribute to your project?",
	},
  {
    type: "input",
    name: "contributing",
    message: "Please describe your contribution guidelines.",
	when: ({ contributionConfirm }) => {
		if (contributionConfirm) {
			return true;
		} else {
			return false;
		}
		}
	},

	// test section
	{
		type: "confirm",
		name: "confirmTesting",
		message: "Is testing available for your applicaiton?",
	},
  {
    type: "input",
    name: "tests",
    message: "Please describe how to test your application.",
  when: ({ confirmTesting }) => {
	if (confirmTesting) {
		return true;
	} else {
		return false;
	}
	}
  },

//   licensing drop down section
  {
    type: "checkbox",
    name: "license",
    message: "Please choose a license for your project from the dropdown menu. (required)",
	choices: ["Apache 2.0", "GNU GPL v3", "MIT", "ISC", "None of the above",],
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
    message: "What is your GitHub username? (required)",
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
    message: "What is your email address? (required)",
	validate: emailInput => {
		if(emailInput) {
			return true;
		} else {
			console.log("Please enter your email to continue!")
			return false;
		}
		}
	},

// instructions for contact
{
	type: "confirm",
	name: "confirmContactMemo",
	message: "Would you like to leave a message with instructions on how to contact you?",
},
{
	type: "input",
	name: "contactQuestions",
	message: "Please add a message with instructions on how to contact you.",
	when: ({confirmContactMemo}) => {
		if (confirmContactMemo) {
			return true;
		} else {
			return false;
		}
		}
	},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		err ? console.error(err) : console.log("success!")
	});
};



// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((userInput) => {
    console.log(userInput);
	writeToFile("./README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();

