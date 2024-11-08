/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/


const subString = function (str1, str2) {
    if (str2 === '') return 0;
    for (let i = 0; i <= str1.length - str2.length; i++) {
        let subStr = str1.substring(i, i + str2.length);
        if (subStr === str2) return i;
    }
    return -1;
}

console.log(subString('dadmulakhaydad', 'dad'));  //0
console.log(subString('dadmulakhaydad', 'mula'));  //3