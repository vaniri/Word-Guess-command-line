const Letter = require("./letter.js");

class Word {
  constructor(word) {
    this.letters = word.split("").map(letter => new Letter(letter));
  }

  getWord() {
    let word = this.letters.join(" ");
    return word;
  }

  guessWord(char) {
    let trackGuess = false;
    this.letters.forEach(letter => {
      if (letter.checkLetter(char)) {
        trackGuess = true;
      }
    });
    return trackGuess;
  }

  isGuessed() {
    for (let letter of this.letters) {
      if (!letter.isGuess()) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Word;
