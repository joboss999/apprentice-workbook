// Fibonacci numbers are created in the following way:
//  - F(0) = 0
//  - F(1) = 1
//  - ...
//  - F(n) = F(n-2) + F(n-1)
// Write a function that calculates the nth Fibonacci number.
module.exports = (n) => {
    let fibsequence = [];
    for (let index = 0; index <= n; index++){
        if (index == 0){
            fibsequence[index] = 0;
        } else if (index == 1){
            fibsequence[index] = 1;
        } else {
            fibsequence[index] = fibsequence[index - 2] + fibsequence[index - 1];
        }
    }
    return fibsequence[n];
}