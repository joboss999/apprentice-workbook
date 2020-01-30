// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = (str) => {
    let newstr = '';
    for (let letter = 0; letter < str.length; letter++){
        if (str[letter] != '!' && str[letter] != '@'  && str[letter] != '#' && str[letter] != '$' && str[letter] != '\.' &&
        str[letter] != '%' && str[letter] != '^' && str[letter] != '&' && str[letter] != '*' && str[letter] != '(' && str[letter] != ')' && str[letter] != '\\'){
            newstr = newstr + str[letter];
        }
    }
    return newstr;
}
