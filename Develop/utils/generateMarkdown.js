// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseChoice = license;
  const label = "License";

  switch (licenseChoice[0]) {
    case "Apache 2.0":
      badgeURL = `https://img.shields.io/badge/License-Apache_2.0-success`
      break;
    case "GNU GPL v3":
      badgeURL = `https://img.shields.io/badge/License-GNU_v3-blue`
      break;
    case "MIT":
      message = "MIT";
      color = "yellow";
      badgeURL = `https://img.shields.io/badge/License-MIT-yellow`;
      break;
    case "ISC":
      message = "ISC";
      color = "blue";
      badgeURL = `https://img.shields.io/badge/License-ISC-blue`;
      break;
    default:
      message = "NA";
      color = "lightgrey";
      badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
  }
  return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // users license pick
  let licenseChoice = license;
  // generates users license pick based on URL
  switch (licenseChoice) {
    case "Apache 2.0":
      linkURL = `https://choosealicense.com/licenses/apache-2.0/`;
      break;
    case "GNU GPL v3":
      linkURL = `https://choosealicense.com/licenses/gpl-3.0/`;
      break;
    case "MIT":
      linkURL = `https://choosealicense.com/licenses/mit/`;
      break;
    case "ISC":
      linkURL = `https://choosealicense.com/licenses/isc/`;
      break;
    default:
      linkURL = "";
  }
  return linkURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license); // returns badgeURL
  let licenseDecision = renderLicenseLink(license); // returns linkURL
  return [licenseBadge, licenseDecision];
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  let licenseSection = renderLicenseSection(data.license);
  
  
  return `
  # ${data.title}

  ![${data.license}](${licenseSection[0]})


  


  ##Table of Contents
  ---
  1. [Description](#description)
  1. [Installation](#installation)
  1. [Usage](#usage)
  1. [Contribution](#contributing)
  1. [Testing](#tests)
  1. [Additional Info](#additional-info)

  ## Description:
  ---
  ${data.description}

  ## Installation:
  ---
  ${data.installation}

  ## Usage:
  ---
  ${data.usage}

  ## Contributing:
  ---
  ${data.contribution}

  ## Tests:
  ---
  ${data.testing}

  ## License:
  ---
  ${data.license} license](${licenseSection[1]})

  ## Additional Info:
  ---
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](${data.email}) 
  - Questions: ${data.contactQuestions}
  `;
}

module.exports = generateMarkdown;
