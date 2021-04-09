// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  if(license !== "None")
  {
    return `[License Badge](https://img.shields.io/badge/license-${license}-brightgreen)`    
  }
  return ""
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
  if(license !== "None")
  {
    return `1. [License](#license)`
  }
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
 ${renderLicenseBadge(data.license)}

 ## Table of Contents
 1. [Description](#description)
 1. [Insallation](#installation)
 1. [Usage](#usage)
 ${renderLicenseLink(data.license)}
 1. [Contributing](#contributing)
 1. [Tests](#tests)
 1. [Questions](#questions)

 ## Decription

 ${data.shortDesc}\r\n

 ## Insatllation

 To Install nessary despendencies, please run the following command:

 ${data.installCommand}\r\

 ## Usage

 To use, please first run ${data.userUse}\r\n


`;
}

module.exports = generateMarkdown;
