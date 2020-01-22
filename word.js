const Letter = require("./letter.js")

class Word {
    constructor (word) {
        this.word = word;
        this.letters = word.split("").map(letter => new Letter(letter));
    }

    getWord () {
        let word = this.letters.join("");
        console.log(word);
        return word;
    }

    guessWord () {
        this.word.forEach(console.log(word));
    }
}

module.exports = Word;