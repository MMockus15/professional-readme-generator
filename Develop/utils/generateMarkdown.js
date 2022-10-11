// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licensePick = license;
  let message = "";
  let color = "";
  const label = "License";
  let badgeUrl = "";
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
function renderLicenseSection(license) {}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ![${data.license}](${licenseSection[0]})

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

  ## Instalation:
  ---
  ${data.installation}

  ## Usage:
  ---
  ${data.usage}

  ## Contribution:
  ---
  ${data.contribution}

  ## Testing:
  ---
  ${data.testing}

  ## Licensing
  ---
  [Click here for more information about the ${data.license} license](${licenseSection[1]})

  ## Additional Info:
  ---
  - GitHub: [${data.github}](https://github.com/${data.github});
  - Email: [${data.email}](${data.email}) 
  `;
}

module.exports = generateMarkdown;
