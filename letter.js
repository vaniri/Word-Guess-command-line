class Letter {
    constructor(letter) {
        this.character = letter;
        this.rightGuess = false;
    }

    toString() {
        if (this.rightGuess) {
            return this.character;
        } else {
            return "_";
        }
    }

    checkLetter(input) {
        if (this.character === input) {
            this.rightGuess = true;
            return true;
        } else {
            return false;
        }
    }

    isGuess() {
        return this.rightGuess;
    }
}

module.exports = Letter;
