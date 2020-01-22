const inquirer = require('inquirer');
const Word = require("./word.js");


if (process.argv.length > 2) {
    const [_, __, letter] = process.argv;
    console.log(letter);
} else {
    runInquirer();
}

function runInquirer() {
inquirer
    .prompt([
        {
            name: "letters",
            type: "input",
            message: "Guess a letter!"
        }
    ])
    .then(letter => {
        if (letter.letters === "") { 
            console.log("Please enter a letter!"); 
            runInquirer();
        }
        let word = new Word;
    })
}