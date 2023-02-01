// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  {
    if (!license) return "";

    switch (license.toLowerCase()) {
      case "mit":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "apache 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      default:
        return "";
    }
  }
}

// generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.title}\n
${questions.description}\n
## Technologies
${questions.technologies}\n
## Installation
${questions.installation}\n
## Mock-up Image \n
!(${questions.screenshot})\n
## Credits \n
${questions.credits} \n
## License \n 
${renderLicenseBadge(questions.license)} \n
## Contact \n
I can be reached at ${questions.email}`;
}

module.exports = generateMarkdown;