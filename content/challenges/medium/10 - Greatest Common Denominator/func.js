// Write a function that returns the greatest common divisor (GCD) of two integers.
// Notes: 
//   - Both values will be positive.
//   - The GCD is the largest factor that divides both numbers.
module.exports = (int1, int2) => {
    let num = int1;
    while (num > 0){
        if (int1 % num == 0 && int2 % num == 0){
            return num;
        } else {
            num -= 1;
        }
    }
}
