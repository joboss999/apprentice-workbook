// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {
    //let splitstr = str.split(' ');
    //let newstr = '';
    //for (let word = 0; word < splitstr.length; word++){
    //    let wordsize = splitstr[word].length;
    //    let actualword = splitstr[word];
    //    if (word > 0){
    //        for (let letter = 0; letter < wordsize; letter++){
    //            let newword = '';
    //            if (letter == 0){
    //                newword = newword + ' ' + actualword[letter];
    //                newword = newword.toUpperCase();
    //            } else {
    //                newword = newword + actualword[letter];
    //            }
    //                newstr = newstr + newword;
    //        }
    //    } else {
    //            for (let letter = 0; letter < wordsize; letter++){
    //                let newword = '';
    //                if (letter == 0){
    //                    newword = newword + actualword[letter];
    //                    newword = newword.toUpperCase();
    //                } else {
    //                    newword = newword + actualword[letter];
    //                }
    //            newstr = newstr + newword;
    //            }
    //    }
    //}
    //return newstr
    let words = str.split(' ');
    let newstr = '';
    words.forEach(capfirstletter = (word) =>{
        if (words[0] == word && newstr == ''){
            newstr = newstr + capitalize(word);
        } else {
            newstr = newstr + ' ' + capitalize(word);
        }
    })

    function capitalize(str) {
        return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    }
    return newstr;
}