const Letter = require("./letter.js")

class Word {
    constructor(word) {
        this.letters = word.split("").map(letter => new Letter(letter));
    }

    getWord() {
        let word = this.letters.join(" ");
        return word;
    }

    guessWord(char) {
        this.letters.forEach(letter => {
            letter.checkLetter(char);
        });
    }

    isGuessed() {
        for (let letter of this.letters) {
            if (!letter.isGuess()) { return false; }
        }
        return true;
    }
}

module.exports = Word;