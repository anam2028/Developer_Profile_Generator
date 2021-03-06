// Get function through inquirer 
// axios calls api's from node and gets response

const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

/* - The generated README includes the following sections:
  - Title
  - Description
  - Table of Contents (Not 100% necessary)
  - Installation
  - Usage
  - License
  - Contributing
  - Tests
  - Questions  */

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the Title?"
        },
        {
            type: "input",
            name: "description",
            message: "What is the description?"
        },
        {
            type: "input",
            name: "table",
            message: "Table of contents"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation steps"
        },
        {
            type: "input",
            name: "usage",
            message: "Usage information"
        },
        {
            type: "input",
            name: "license",
            message: "License information"
        },
        {
            type: "input",
            name: "contributing",
            message: "Contributing information"
        },
        {
            type: "input",
            name: "tests",
            message: "What are tests"
        },
        {
            type: "input",
            name: "questions",
            message: "These are the Questions:"
        }
    ])

    // use of markdown and template litral

    .then(function (response) {
        console.log(response)

        // // format ReadMe file
        // //`# ${text.title}`

        fs.writeFile("ReadMe.md", "# " + response.title + "\n" + "\n", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        fs.appendFile("ReadMe.md", "# " + response.description + "\n" + "\n", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        fs.appendFile("ReadMe.md", "# " + response.table + "\n" + "\n", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        fs.appendFile("ReadMe.md", "# " + response.installation + "\n" + "\n", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        fs.appendFile("ReadMe.md", "# " + response.usage + "\n" + "\n", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        fs.appendFile("ReadMe.md", "# " + response.license + "\n" + "\n", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        fs.appendFile("ReadMe.md", "# " + response.contributing + "\n" + "\n", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        fs.appendFile("ReadMe.md", "# " + response.tests + "\n" + "\n", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        fs.appendFile("ReadMe.md", "# " + response.questions + "\n" + "\n", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        inquirer
            .prompt({
                message: "Enter your GitHub username",
                name: "username"
            })
            .then(function ({ username }) {
                const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

                axios
                    .get(queryUrl)
                    .then(function (res) {
                        const { avatar_url } = res.data[1].owner;
                        fs.appendFile("ReadMe.md", "## My GitHub profile" + "\n" + "\n" + "![My Image](" + avatar_url + ")" + "\n" + "\n", function (err) {
                            if (err) {
                                return console.log(err);
                            }
                            console.log("Your Readme is saved!");
                        });

                    })
            });

    });






