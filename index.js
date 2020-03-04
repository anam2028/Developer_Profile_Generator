
// axios calls api's from node and gets response
// get fucntion through inquirer 

const inquirer = require("inquirer");
const fs = require("fs");
// const axios = require("axios");

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
            message: "These are the questions"
        }
    ])

    // use of markdown and template litral

    .then(function (response) {
        fs.writeFile("ReadMe.md", JSON.stringify(response), function (err) {
        });

        var text = Object.create(null);
        fs.readFile("ReadMe.md", "utf-8", function (error, data) {
            console.log("new data")
            text = JSON.parse(data);

        })
    })

