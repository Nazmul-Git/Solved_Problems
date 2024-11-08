/*

                                             7. Reverse Integer


Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
*/

const reverseNumber= function(x){
    let num= x;
    let arr= Math.abs(num).toString().split('');
    let l=0, r=arr.length-1;
    while(l<r){
        let temp = arr[l];
        arr[l]=arr[r];
        arr[r]=temp;
        l++;
        r--;
    }
    if(num.toString().startsWith('-')){
        arr.unshift('-');
    }
    let reversedNum = parseInt(arr.join(''));

    if (reversedNum < -2147483648 || reversedNum > 2147483647) {
        return 0;
    }
    return reversedNum;
};
console.log(reverseNumber(-3210));