// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {
    let splitstr = str.split(' ');
    let newstr = '';
    for (let word = 0; word < splitstr.length; word++){
        let wordsize = splitstr[word].length;
        let actualword = splitstr[word];
        if (word > 0){
            for (let letter = 0; letter < wordsize; letter++){
                let newword = '';
                if (letter == 0){
                    newword = newword + ' ' + actualword[letter];
                    newword = newword.toUpperCase();
                } else {
                    newword = newword + actualword[letter];
                }
                    newstr = newstr + newword;
            }
        } else {
                for (let letter = 0; letter < wordsize; letter++){
                    let newword = '';
                    if (letter == 0){
                        newword = newword + actualword[letter];
                        newword = newword.toUpperCase();
                    } else {
                        newword = newword + actualword[letter];
                    }
                newstr = newstr + newword;
                }
        }
    }
    return newstr
}