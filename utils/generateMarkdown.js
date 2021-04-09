// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function softwareLicense(licenseType, needLink) 
{
    let licLink;
    console.log(needLink)
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
  let LicenseBadge = softwareLicense(license,false);

  if(license !== "None")
  {
    return `[![License](${LicenseBadge})](${renderLicenseLink(license)})`  
  }
  return ""
}


// TODO: Create a function that returns the license link
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


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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

 To Install necessary despondencies, please run the following command:

 ${data.installCommand}\r\

 ## Usage

 To use, please first run ${data.userUse}\r\n


 ## Insatllation

 ${data.installCommand}\r\n


 ## License

 [Lic](${renderLicenseLink(data.license)})

 ## Contributing

 ${data.userUse}

 ${data.userContribute}

 ## Tests

 ${data.testCommand}\r\n

 ## Questions

If you have any question or need to report a issues, please contact me on email below.

[email me:](mailto:eloy522752@gmail.com)


`;
}

module.exports = generateMarkdown;
