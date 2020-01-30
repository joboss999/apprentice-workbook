// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
    for (let letter = 0; letter < str.length; letter++){
        for (let otherletter = letter + 1; otherletter < str.length; otherletter++){
            if (letter < str.length - 2 && str[letter] != str[letter+1]){   
                if (str[letter].toUpperCase() == str[otherletter].toUpperCase()){
                    return false;
                }
            } else {
                return true;
            }
        }
    }
}