class Letter {
    constructor (letter) {
        this.character = letter,
        this.rightGuess = false;
    }

    toString () {
        if (this.rightGuess) {
            return this.character;
        } else { return "_"; }
    }

    checkLetter (input) {
        if (this.letter === input) {
            this.rightGuess = true;
        }
    }
}

module.exports = Letter;