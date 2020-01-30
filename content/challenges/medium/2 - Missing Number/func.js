// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = (arr) => {
    for (let num = 1; num <= 10;num++){
        Loop:
        for (let index = 0; index < arr.length; index++){
            if (num == arr[index]){
                break Loop;
            } else if (num != arr[index] && index == arr.length - 1){
                return num;
            }
        }
    }
}