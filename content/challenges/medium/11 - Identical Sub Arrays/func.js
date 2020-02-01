// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.
module.exports = (arr) => {
    //let count = 0;
    //for (let subarr = 0; subarr < arr.length; subarr++){
    //    let subsize = arr[subarr].length;
    //    let newarr = arr[subarr];
    //    Loop1:
    //    for (let index = 0; index < subsize; index++){
    //        if (subsize > 1 && index> 0){
    //            if (newarr[index] != newarr[index - 1]){
    //                break Loop1;
    //            } else if(index == subsize -1 && newarr[index] == newarr[index-1]){
    //                count++;
    //            }
    //        }else if (subsize == 1){
    //            count++;
    //        }
    //    }
    //}
    //return count;
    let count = 0;
    arr.forEach(callsubarr = (subarr) =>{
        if (subarr.every((currentValue) => currentValue == subarr[0]) == true){
            count += 1;
        }
    })
    return count;
}
