// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
    //let splitstr = str.split(' ');
    //let newstr = '';
    //for (let word = 0; word < splitstr.length; word++){
    //    let wordsize = splitstr[word].length;
    //    let actualword = splitstr[word];
    //    if (word > 0){
    //        if (wordsize >=5){
    //            let newword = '';
    //            for (let letter = 0; letter < wordsize; letter++){
    //                newword = newword + actualword[wordsize - 1 - letter]
    //            }
    //            newstr = newstr + ' ' + newword;
    //        } else {
    //            newstr = newstr + ' ' + splitstr[word];
    //        }
    //    } else {
    //        if (wordsize >=5){
    //            let newword = '';
    //            for (let letter = 0; letter < wordsize; letter++){
    //                newword = newword + actualword[wordsize - 1 - letter]
    //            }
    //            newstr = newstr + newword;
    //        } else {
    //            newstr = newstr + splitstr[word];
    //        }
    //    }
    //}
    //return newstr
    let words = str.split(' ');
    let newstr = '';
    words.forEach(reverse = (word) =>{
        if (words[0] == word){
            if (word.length > 5){
                let newword = makenewword(word);
                newstr = newstr + newword;
            } else {
                newstr = newstr + word;
            }
        } else{
            if (word.length > 5){
                let newword = makenewword(word);
                newstr = newstr + ' ' + newword;
            } else {
                newstr = newstr + ' ' + word;
            }
        }
    })
    function makenewword(word){
        let letters = word.split('');
        let newarr = letters.reverse();
        let newword = newarr.reduce( (makingnewword, letter) => {
            return makingnewword + letter;
        }, '')
        return newword;      
    }
    return newstr;
}