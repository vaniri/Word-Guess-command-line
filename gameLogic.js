const inquirer = require('inquirer');
const Word = require("./word.js");
const randomWord = require("./wordSource.js")

let attempts = 20;

function runInquirer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "letters",
                message: "Guess a letter!"
            }
        ])
        .then(letter => {
            if (letter.letters === "") {
                console.log("Please enter a letter!");
                runInquirer();
            }
            if (attempts !== 0) {
                handleGuess(letter.letters);
            } else { console.log("Game over!"); }
        })
}

runInquirer();

let word = new Word(randomWord.getRandomWord());
console.log(word);

function handleGuess(letter) {
    word.guessWord(letter);
    if (word.isGuessed()) { console.log("You get it!"); }
    attempts --;   
    console.log(word.getWord());
    runInquirer();
}
