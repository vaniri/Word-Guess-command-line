const inquirer = require("inquirer");
const Word = require("./word.js");
const randomWord = require("./wordSource.js");

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
    console.log("Correct!");
  } else {
    console.log("Incorrect!");
  }

  console.log(word.getWord());

  if (word.isGuessed()) {
    console.log("You get it!");
    return;
  }
  
  if (--attempts === 0) {
    console.log("Game over!");
  } else {
    runInquirer();
  }
}
