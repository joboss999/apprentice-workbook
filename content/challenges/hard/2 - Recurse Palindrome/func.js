// Write a function that recursively determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
  // put your code here
  // don't touch anything else
  //function palin(str) {
  //  if (str.length == 1){
  //    return true;
  //  } else if (str.length == 0){
  //    return true;
  //  } else if (str.length == 2 && str[0] == str[1]){
  //    return true;
  //  } else if (str.length == 2 && str[0] != str[1]){
  //    return false;
  //  } else if (str[0] == str[str.length - 1]) {
  //    let newstr = '';
  //    for (let index = 1;index < str.length - 1; index++){
  //      newstr = newstr + str[index];
  //    }
  //    return palin(newstr);
  //  } else {
  //    return false;
  //  }
  //}
  //return palin(str);
  function palin(str) {
    if (str.length == 1){
      return true;
    } else if (str.length == 0){
      return true;
    } else if (str.length == 2 && str[0] == str[1]){
      return true;
    } else if (str.length == 2 && str[0] != str[1]){
      return false;
    } else if (str[0] == str[str.length - 1]) {
      let newstr = str.slice(1,str.length - 1)
      return palin(newstr);
    } else {
      return false;
    }
  }
  return palin(str); 
}