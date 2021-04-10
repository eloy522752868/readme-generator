//modified by: Eloy Gonzalez
//modified date: 04/08/2021

//Create/modified a functions that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function softwareLicense(licenseType, needLink) 
{
  // added condition to handle one function that return based on requested a image link or lic link dynamically based on selection.
    let licLink;
    if (needLink === true) {
      switch (licenseType) {
        case 'MIT':
          licLink= 'https://opensource.org/licenses/Apache-2.0';
          break;        
        case 'APACHE2.0':
          licLink = 'https://opensource.org/licenses/Apache-2.0';
          break;
        case 'GPL3.0':
          licLink= 'https://opensource.org/search/node/GPL3.0';
          break;
        default:
          licLink = 'None';
          break;
      };
    }
    else
    {
      switch (licenseType) {
        case 'MIT':
          licLink= 'https://img.shields.io/badge/License-MIT-yellow.svg';
          break;       
        case 'APACHE2.0':
          licLink = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
          break;
        case 'GPL3.0':
          licLink = 'https://img.shields.io/badge/license-GPL3.0-red.svg';
          break;
        default:
          licLink = 'None';
          break;
      };
    }
    return licLink ;
}

function renderLicenseBadge(license) 
{
    // calling badge link from softwareLicense that return based on requested a image link based on selection.
    // If there is no license, return an empty string
  let LicenseBadge = softwareLicense(license,false);

  if(license !== "None")
  {
    return `[![License](${LicenseBadge})](${renderLicenseLink(license)})`  
  }
  return ""
}
 // calling License link from softwareLicense that return based on requested a lic link based on selection.returns 
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
  let LicenseBadgeLink = softwareLicense(license,true);
  if(license !== "None")
  {
    return LicenseBadgeLink
  }
    return "None"
}

// Create a function that returns the license section of README
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
 ${renderLicenseBadge(data.license)}

 ## Table of Contents
 1. [Description](#description)
 1. [Installation](#installation)
 1. [Usage](#usage)
 1. [License](#license)
 1. [Contributing](#contributing)
 1. [Tests](#tests)
 1. [Questions](#questions)

 ## Decription

 ${data.shortDesc}\r\n

 ## Insatllation

 ${data.installCommand}\r\n

 ## Usage

 To use, please first run ${data.userUse}\r\n

 ## License

 [${renderLicenseLink(data.license)}](${renderLicenseLink(data.license)})

 ## Contributing

 ${data.userUse}

 ${data.userContribute}

 ## Tests

 ${data.testCommand}\r\n

 ## Questions

If you have any question or need to report a issues, please contact me on email below.

[My Profile:](https://github.com/${data.userName})


`;
}

module.exports = generateMarkdown;
