// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const promptUser = data => {
    console.log(`
    =========================
    Let's Create Your README!
    =========================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your application?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid title.');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'description',
            message: 'Please enter a description of your application:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid description.');
                    return false;
                }
            }
        }
    ]);
};

const promptToc = tocConfirm => {
    return inquirer.prompt([{
            type: 'confirm',
            name: 'confirmToc',
            message: 'Would you like your README to have a table of contents?',
            default: false
    }]);
};

const promptInstall = instData => {
    console.log(`
    ========================
    Add an Installation Step
    ========================
    `)
    if (!instData.steps) {
        instData.steps = [];
    }
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'step',
            message: 'Add a step to install your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid step.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddStep',
            message: 'Would you like to add another step?',
            default: false
        }
    ])
    .then(instData => {
        instData.steps.push(instData);
        if (instData.confirmAddStep) {
            return promptInstall(instData);
        } else {
            return instData;
        }
    });
};

// Function call to initialize app
init();
