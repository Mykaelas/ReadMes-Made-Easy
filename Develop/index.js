// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./page-template');

// TODO: Create an array of questions for user input
const questions = () => {
   // This returns all of the user input to the const.
    return inquirer.prompt([ 
    
    // Asking for the project name    
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?(Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a valid response!');
                return false;
            }
        }
    },
    
    // Asking if the user knows what license they're using
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Do you know what kind of License you are using?',
        validate: confirmingLicense => {
            if (confirmingLicense) {
                return true;
            } else {
                console.log ('Check out https://choosealicense.com/ to help you decide on which license(s) to use. ')
                return false;
            } 
        },
    },
    
    // Asking for the user to select a license
    {
        
        type: 'checkbox',
        name: 'license',
        message: 'What License(s) does your project fall under?',
        choices: ['MIT License', 'Apache License 2.0', 'GPL License(aka GNU General Public License v3.0', 'BSD License(2-clause)', 'BSD License(3-clause)', 'BSD License(4-clause)', 'None of the above']
    },
    
    // Asking the user for a description of their project
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project'
    },
    
    // Asking the user for installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Write the installation instructions for your project here'
    },

    // Asks the user to provide an example of their project/expected outcome as well as provide links if possible

    {
        type: 'input',
        name: 'usage',
        message: "Write what the expected outcome of your project should be as well as paste example links if applicable."
    },

    // Asks about other contributers
    {
        type: 'confirm',
        name: 'contribution',
        message: 'Did other people contribute to your project?',
        default: false
    },

    // Ask for other contributers information
    {
        type: 'input',
        name: 'contributions',
        message: ' Please list the name and githubs of your fellow contributers'
    },

    // Ask for contact information
    {
        type: 'input',
        name: 'github',
        message: 'Please insert your github link here'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address here'
    },

    // Test section of the ReadMe
    {
        type: 'input',
        name: 'test',
        message: 'Detail what kind fo tests you have run here'
    }



]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log ("Your ReadMe is ready to be previwed!");
    })

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log (userInput);

        // call writeToFile to create the file called README and pull information from the userInput to use the function generatePage to create the README
        writeToFile("README.md", generatePage(userInput));
    });

};

// Function call to initialize app
init();
