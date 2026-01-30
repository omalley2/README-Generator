// utils/generateMarkdown.js (Completed)

// Helper functions for handling the license section of the README.
// These functions handle:
// - A function that returns a license badge based on which license is passed in
// - A function that returns a license link for the Table of Contents
// - A function that returns the license section text
//
// If there is no license (e.g., the user selects "None"), these helpers
// return an empty string so that nothing is displayed in the README for license.

function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  }
  
  // Return the appropriate badge based on the license
  const badges = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPL 3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "BSD 3-Clause": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  };
  
  return badges[license] || "";
}

function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  }
  
  // Return the Table of Contents link for the License section
  return "* [License](#license)";
}

function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  }
  
  // Return the License section with the appropriate text
  return `## License

This project is licensed under the ${license} license.`;
}

// Complete function to generate the README markdown string
// using the data collected from inquirer.
// The generated README includes sections for:
//
// - Title
// - License badge (if any)
// - Description
// - Table of Contents
// - Installation
// - Usage
// - License (if any)
// - Contributing
// - Tests
// - Questions (GitHub + email)

function generateMarkdown(data) {
  // Use template literals to build the README.md content.
  // Call the license helper functions to handle license-related sections.
  
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}.

You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

// Export the generateMarkdown function so index.js can use it.
module.exports = generateMarkdown;

