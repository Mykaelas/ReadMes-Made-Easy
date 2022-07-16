const generateReadMe = (data) => {
    return ` # ${data.title}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributions](#contribution)
    - [Features](#features)
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
    ${data.contribution}
    ## Features:
    ${data.features}
    ## Questions:
    ${data.questions}
    ## Tests:
    ${data.tests}
   
    `;
  };
  module.exports = generateReadMe;

