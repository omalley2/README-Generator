// 02-Challenge — Professional README Generator (Completed)

// Import the required packages:
// - fs for writing files
// - inquirer for collecting user input
// - the generateMarkdown function from ./utils/generateMarkdown

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input.
// Each question collects part of the README content:
// - GitHub username
// - Email address
// - Project title
// - Project description
// - License (choose from a list)
// - Installation command
// - Test command
// - Usage information
// - Contribution guidelines

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: input => input ? true : "Project title is required!"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:",
    validate: input => input ? true : "Project description is required!"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
    default: "npm install"
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
    validate: input => input ? true : "Usage information is required!"
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?",
    default: "Please contact me if you would like to contribute to this project."
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions?",
    default: "npm test"
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"]
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: input => input ? true : "GitHub username is required!"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: input => {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input) ? true : "Please enter a valid email address!";
    }
  }
];

// Create a function to write the README file.
// It takes a file name and the data to write.
// Uses fs.writeFile to write the data asynchronously.

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log(`Success! ${fileName} has been generated!`);
  });
}

// Create a function to initialize the app.
// Inside it:
// 1. Prompt the user with inquirer.prompt(questions)
// 2. Pass the answers to generateMarkdown to create the README content
// 3. Write the generated content to README.md

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the markdown content using the answers
      const markdownContent = generateMarkdown(answers);
      
      // Write the content to README.md
      writeToFile("README.md", markdownContent);
    })
    .catch((error) => {
      console.error("Error during prompts:", error);
    });
}

// Function call to initialize app
init();
