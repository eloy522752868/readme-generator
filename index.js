// TODO: Include packages needed for this application
const generateMarkdownfunc = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
   "What is your Github username?",
   "What is your email address?",
   "What is your project's name?",
   "Please write a short description of your project?",
   "What kind of license should your project have?",
   "What command should be run to install dependencies?",
   "What command should be run to run tests?",
   "What does the user need to know about using the repo?",
   "What does the user need to know about contributing to the repo?"
];

const [userName, email, projectName, shortDesc, license, installCommand, testCommand, userUse, userContribute] = questions


// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
   console.log(data.name);
   //content += "\n ### Name: " + data.name + "\n ";
   const filename =    "READMEgenerate.md"; //`${data.name.toLowerCase().split(' ').join('')}.txt`;

   fs.writeFile(filename,data, (err) =>
     err ? console.log(err) : console.log('Success!'))

}

// TODO: Create a function to initialize app
function init() {
  
  // console.log(generateMarkdownfunc("Test"));
    // TODO: Create a function to initialize app
    const [userName, email, projectName, shortDesc, license, installCommand, testCommand, userUse, userContribute] = questions

   inquirer
   .prompt([
     {
       type: 'input',
       name: 'userName',
       message: userName,
     },
     {
      type: 'input',
      name: 'email',
      message: email,
    },
    {
      type: 'input',
      name: 'projectName',
      message: projectName,
    },
    {
      type: 'input',
      name: 'shortDesc',
      message: shortDesc,
    },
     {
      type: 'list',
       message:  license,
       choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'None'],
       default: 'MIT',
       name: 'license',
     },
     {
      type: 'input',
      name: 'installCommand',
      default: 'npm i',
      message: installCommand,
    },
    {
      type: 'input',
      name: 'testCommand',
      default: 'npm test',
      message: testCommand,
    },
    {
      type: 'input',
      name: 'userUse',
      message: userUse,
    },
    {
      type: 'input',
      name: 'userContribute',
      message: userContribute,
    },
   ])
   .then((data) => {
    // console.log(generateMarkdownfunc(data));
     writeToFile("TEST",generateMarkdownfunc(data))
   });

 }


// Function call to initialize app
init();

  
  // Using the file system module to read and write the README.md file

