// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {
    //let outputarr = [];
    //for (let num = 0; num < arr.length; num++){
    //    if (arr[num] % 2 == 0){
    //        outputarr[num] = (arr[num] - (n * 2));
    //    } else {
    //        outputarr[num] = (arr[num] + (n * 2));
    //    }
    //}
    //return outputarr;
    return arr.map(evenorodd = (num) => {
        if (num % 2 == 0){
            return num - (n * 2);
        } else {
            return num + (n * 2);
        }
    })
}