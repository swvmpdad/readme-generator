// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === '') {
    return '';
    }

    return `

    ## License

    ${license}
    `;
};

// function that adds a table of contents based on user input
function tableOfContents(confirm) {
    if (!confirm) {
        return '';
        
    }
    return `

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    `;
};

// function to list the installation steps
function installSection(install) {
    if (install === '') {
        return '';
    }

    const installArr = install.split(',');
    return `

    ## Installation

    ${installArr.map(installStep => {
    return `- ${installStep.split(',').filter(x => x.trim()).join()}
    `;
    })}
    `;    
};

// function to list the usage steps
function usageSection(usage) {
    if (usage === '') {
        return '';
    }

    const usageArr = usage.split(',');
    return `

    ## Usage

    ${usageArr.map(usageStep => {
    return `- ${usageStep.split(',').filter(x => x.trim()).join()}
    `;
    })}
    `;    
};

// function to list the credits
function creditsSection(credits) {
    if (credits === '') {
        return '';
    }

    const creditsArr = credits.split(',');
    return `

    ## Credits

    ${creditsArr.map(creditsStep => {
    return `- ${creditsStep.split(',').filter(x => x.trim()).join()}
    `;
    })}
    `;    
};

// function to generate markdown for README
function generateMarkdown(userData) {
    return `

    # ${userData.title}

    ## Description

    ${userData.description}

    ${tableOfContents(userData.confirmToc)}

    ${installSection(userData.install)}

    ${usageSection(userData.usage)}

    ${creditsSection(userData.credits)}

    ${renderLicenseSection(userData.license)}


    Made by ${userData.name}.
    Find me on GitHub @ [${userData.github}](https://github.com/${userData.github})
    `;
};

module.exports = generateMarkdown;
