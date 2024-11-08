var isPalindrome = function(x) {

    let strArr = x.toString().split('');
    let l = 0, r = strArr.length - 1;

    while (l < r) {
        let temp = strArr[l];
        strArr[l] = strArr[r];
        strArr[r] = temp;
        l++;
        r--;
    }

    return x === parseInt(strArr.join(''));
};

console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));   // false
