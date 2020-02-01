// Fibonacci numbers are created in the following way:
//  - F(0) = 0
//  - F(1) = 1
//  - ...
//  - F(n) = F(n-2) + F(n-1)
// Write a function that calculates the nth Fibonacci number.
module.exports = (n) => {
    //let fibsequence = [];
    //for (let index = 0; index <= n; index++){
    //    if (index == 0){
    //        fibsequence[index] = 0;
    //    } else if (index == 1){
    //        fibsequence[index] = 1;
    //    } else {
    //        fibsequence[index] = fibsequence[index - 2] + fibsequence[index - 1];
    //    }
    //}
    //return fibsequence[n];
    function fibsequence(num){
        let total = 0;
        if (num == 0){
            total = total + 0;
        } else if (num == 1){
            total = total + 1;
        } else {
            total = total + fibsequence(num - 1) + fibsequence(num - 2);
        }
        return total;
    }
    return fibsequence(n);
}