const fs = require('fs');
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

function getRandomWord() {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}

module.exports = {
    getRandomWord
}