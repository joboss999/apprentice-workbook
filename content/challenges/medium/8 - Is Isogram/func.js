// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
    //for (let letter = 0; letter < str.length; letter++){
    //    for (let otherletter = letter + 1; otherletter < str.length; otherletter++){
    //        if (letter < str.length - 2 && str[letter] != str[letter+1]){   
    //            if (str[letter].toUpperCase() == str[otherletter].toUpperCase()){
    //                return false;
    //            }
    //        } else {
    //            return true;
    //        }
    //    }
    //}
    function isIsogram(str) {
        str = str.toLowerCase();
        if (str.length == 2 && str[0] != str[1]) {
            return true;
        } else {
            let letter = str[0];
            let newstr = str.slice(1);
            if (newstr.includes(letter) == true){
                return false;
            } else {
                return isIsogram(newstr);
            }
        }
    }
    return isIsogram(str);
}