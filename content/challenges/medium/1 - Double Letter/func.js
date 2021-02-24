// Create a function that takes a word and returns true if the word has two consecutive identical letters.
module.exports = (word) => {
    if (word.length > 2) {
        return true;
    } else {
        return false;
    }
}