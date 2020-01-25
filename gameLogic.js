const inquirer = require("inquirer");
const Word = require("./word.js");
const randomWord = require("./wordSource.js");

let attempts = null;
let word = "";
resetGameState();

const guessFeedbackColor = '\033[0;36m';
const attemptsColor = '\033[0;34m';
const startGame = '\033[0;34m';
const gameResultColor = '\033[0;35m';
const inputErrorColor = '\033[0;31m';
const resetColor = '\033[0m';

function runInquirer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "letters",
                message: "Guess a letter!",
                validate: input => {
                    input = input.toLowerCase();
                    if (!(input >= 'a' && input <= 'z')) {
                        console.log(`${inputErrorColor} \nYou should enter a letter ${resetColor}`);
                        return false;
                    }
                    return true;
                }
            }
        ])
        .then(letter => {
            handleGuess(letter.letters);
        });
}

runInquirer();

function handleGuess(letter) {
    if (word.guessWord(letter)) {
        console.log(`${guessFeedbackColor} CORRECT! ${resetColor}`);
    } else {
        console.log(`${guessFeedbackColor} INCORRECT! ${resetColor}`);
        attempts--;
    }

    console.log(word.getWord());

    if (word.isGuessed()) {
        logResult("YOU GET IT!");
        newRound();
        return;
    }
    if (attempts === 0) {
        logResult("GAME OVER!");
        newRound();
    } else {
        console.log(`remaningGuess: ${attemptsColor} ${attempts}`);
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
                message: `Another round? ${startGame} (y/n) ${resetColor}`
            }
        ])
        .then(answer => {
            if (answer.answer.toLowerCase() === "y") {
                resetGameState();
                runInquirer();
            } else { return; }
        });
}

function resetGameState() {
    word = new Word(randomWord.getRandomWord());
    attempts = 5;
}

function logResult(result) {
    console.log("");
    console.log(gameResultColor + "-----------" + resetColor);
    console.log(result);
    console.log(gameResultColor + "-----------" + resetColor);
}

