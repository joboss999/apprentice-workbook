// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.
// Notes:
//   - Final strings won't include words with double letters (e.g. "passing", "lottery").

module.exports = (word) => {
    let newstr = '';
    for (let letter = 0; letter < word.length; letter++){
        if (letter == 0){
            newstr = newstr + word[letter];
        } else {
            if (word[letter] != word[letter - 1]){
                newstr = newstr + word[letter];
            }
        }
    }
    return newstr;
}