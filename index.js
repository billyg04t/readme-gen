const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate the README content
function generateREADME(answers) {
  // Create the README content
  const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![License Badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
This application is covered under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
For any questions, you can contact me:
- GitHub: [${answers.username}](https://github.com/${answers.username})
- Email: ${answers.email}
`;

  return readmeContent;
}

// Prompt user for input using inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter your project title:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add steps for application installation:'
    },
    {
        type: 'input',
        name: 'license',
        Message: ''
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List soucres and contributors:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List tests for application:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Add your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Add your email:'
    }
  ])
  .then(answers => {
    const readmeContent = generateREADME(answers);

    // Write the README file
    fs.writeFile('README.md', readmeContent, err => {
      if (err) {
        console.error('Error writing README:', err);
      } else {
        console.log('README.md successfully generated!');
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
