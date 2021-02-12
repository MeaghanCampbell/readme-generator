// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your projects name')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else {
                    console.log('Please enter a description of your project')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true
                } else {
                    console.log('Please enter installation information')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true
                } else {
                    console.log('Please enter usage information')
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license do you have for this project?',
            choices: ['MIT', 'Apache', 'GPL']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project? (Required)',
            validate: contributingInput => {
                if (contributingInput) {
                    return true
                } else {
                    console.log('Please enter contributor information')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please write tests for your applications and examples of how to run.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your contact email.'
        },
    ])
}

questions()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();