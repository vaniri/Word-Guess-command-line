const inquirer = require("inquirer");
const Word = require("./word.js");
const randomWord = require("./wordSource.js");

let attempts = null;
resetAttempts();

const cyan = '\033[0;36m';
const violet = '\033[0;34m';
const purple = '\033[0;35m';
const resetColor = '\033[0m';

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
            } else {
                handleGuess(letter.letters);
            }
        });
}

runInquirer();

let word = new Word(randomWord.getRandomWord());
console.log(word);

function handleGuess(letter) {
    if (word.guessWord(letter)) {
        console.log(cyan + "CORRECT!", resetColor);
    } else {
        console.log(cyan + "INCORRECT!", resetColor);
    }

    console.log(word.getWord());

    if (word.isGuessed()) {
        logResalt("YOU GET IT!");
        newRound();
    }
    if (--attempts === 0) {
        logResalt("GAME OVER!");
        newRound();
    } else {
        console.log("remaningGuess: " + violet + attempts);
        console.log("");
        runInquirer();
    }
}

function newRound() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "answer",
                message: `Another round? ${violet} (y/n) ${resetColor}`
            }
        ])
        .then(answer => {
            if (answer.answer.toLowerCase() === "y") {
                resetAttempts();
                runInquirer();
            } else { return; }
        });
}

function resetAttempts() {
    attempts = 20;
}

function logResalt(resalt) {
    console.log("");
    console.log(purple + "-----------" + resetColor);
    console.log(resalt);
    console.log(purple + "-----------" + resetColor);
}