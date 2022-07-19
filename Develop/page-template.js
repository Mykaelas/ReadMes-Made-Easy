
// This is used as the outline/template for creating the ReadMe. 
const generateReadMe = (data) => {
    return `# ${data.title}

## License:

![license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Questions](#questions)
- [Tests](#tests)

## Description:

${data.description}

## Installation:

${data.installation}

## Usage:

${data.usage}

## License:

${data.license}

## Contributions:

${data.contributions}

## Questions:

Want to see more of my work? Reach out to me here at https://github.com/${data.github} to see what I am working on next.

You can reach me at my email, ${data.email} for any other questions you may have.

## Tests:

${data.tests} `;
  };
module.exports = generateReadMe;

