// Create a function that takes a word and returns true if the word has two consecutive identical letters.
module.exports = (word) => {
    //let letter;
    //for (letter = 0; letter < word.length; letter++) {
    //    if (letter > 0){
    //        if (word[letter] == word[letter-1]){
    //            return true
    //        }
    //    else if (letter == word.length - 1 && word[letter] != word[letter - 1]){
    //        return false
    //    }
    //    }
    //}
    let ans = true;
    let regex = /(.)\1/g;
    let newarr = word.match(regex);
    if (newarr == null){
        ans = false;
    }
    return ans;
}