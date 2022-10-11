// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licensePick = license;
  let message = "";
  let color = "";
  const label = "License";
  let badgeUrl = "";

  switch (licensePick) {
    case "Apache License 2.0":
      message = "Apache_2.0";
      color = "success";
      badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
      break;
    case "GNU GPL v3":
      message = "GPL_v3";
      color = "blue";
      badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
      break;
    case "MIT":
      message = "MIT";
      color = "yellow";
      badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
      break;
    case "ISC":
      message = "ISC";
      color = "blue";
      badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
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
  let licensePick = license;
  // generates users license pick based on URL
  switch (licensePick) {
    case "Apache License 2.0":
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
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license); // returns badgeURL
  let licenseDesc = renderLicenseLink(license); // returns linkURL
  return [licenseBadge, licenseDesc];
}

}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.usage);
  return `# ${data.title}
  


  ##Table of Contents
  ---
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Testing](#testing)
  -[Additional Info](#additional-info)

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
 ${data.licensing}

  ## Additional Info:
  ---
  - GitHub: [${data.github}](https://github.com/${data.github});
  - Email: [${data.email}](${data.email}) 
  - Contact: ${data.contactQuestions}
  `;
}

module.exports = generateMarkdown;
