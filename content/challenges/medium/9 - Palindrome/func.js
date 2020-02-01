// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
    //let backward = '';
    //for (let letter = 0; letter < str.length; letter++){
    //    backward = backward + str[str.length - 1 - letter];
    //}
    //if (backward == str){
    //    return true;
    //} else {
    //    return false;
    //}
    const forward = str;
    let newarr = str.split('');
    let revarr = newarr.reverse();
    let backward = '';
    revarr.forEach(combine = (letter) =>{
        backward = backward + letter;
    })
    if (backward == forward){
        return true;
    } else {
        return false;
    }
}