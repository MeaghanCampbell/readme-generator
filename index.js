// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your projects title')
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
            type: 'list',
            name: 'license',
            message: 'What kind of license do you have for this project?',
            choices: ['Apache', 'MIT', 'BSD', 'GNU', 'Eclipse', 'IBM', 'none']
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who contributed to this project? (Required)',
            validate: creditsInput => {
                if (creditsInput) {
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
    // function to generate the markdown code
    .then(data => {
        return generateMarkdown(data)
    })
    // function to write README file
    .then(
        function(data) {

            fs.writeFile('./dist/readme.md', data, err => {
                if (err) {
                    return console.log(err)
                }
                console.log('Success! Check out the dist folder to view your professional readme.md')
            })
        }
    )
}

questions()


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();