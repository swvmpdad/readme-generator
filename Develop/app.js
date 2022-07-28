// TODO: Include packages needed for this application
// const writeFile = require('.utils/generateMarkdown.js');
const inquirer = require('inquirer');
// const generateMarkdown = require('./src/page-template.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const promptUser = userData => {
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
        },
        {
            type: 'confirm',
            name: 'confirmToc',
            message: 'Would you like your README to have a table of contents?',
            default: false
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide any steps for installation of the app'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide any steps for usage:'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Did you use a license for this project?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 
                      'Apache License 2.0', 'MIT', 'Boost Software License 1.0', 'Unilicense']
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Add any collaborators, assets, or tutorials used here:'
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:'
        }
    ]);

};

// const promptInstall = instData => {
//     console.log(`
//     ========================
//     Add an Installation Step
//     ========================
//     `);
//             if (!instData.steps) {
//                 instData.steps = [];
//             }
//         return inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     name: 'step',
//                     message: 'Add a step to install your project.',
//                     validate: nameInput => {
//                         if (nameInput) {
//                             return true;
//                         } else {
//                             console.log('Please enter a valid step.');
//                             return false;
//                         }
//                     }
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'confirmAddStep',
//                     message: 'Would you like to add another step?',
//                     default: false
//                 }
//             ])
//             .then(installData => {
//                 instData.steps.push(installData);
//                 if (installData.confirmAddStep) {
//                     return promptInstall(instData);
//                 } else {;
//                     return instData;
//                 }
//             });
// };

// Function call to initialize app
promptUser()
    .then(userData => {
        console.log(userData);
    })
    // .then(promptInstall)
    // .then(instData => {
    //     console.log(instData);
    // })
    .catch(err => {
        console.log(err);
    });