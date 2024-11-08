var reverseVowels = function (s) {
    let sArr = s.split('');
    let l = 0, r = sArr.length - 1;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    while (l < r) {
        if (!vowels.has(sArr[l])) {
            l++;
        }
        else if (!vowels.has(sArr[r])) {
            r--;
        }
        else {
            let temp = sArr[l];
            sArr[l] = sArr[r];
            sArr[r] = temp;
            l++;
            r--;
        }
    }
    return sArr.join('');
};
console.log(reverseVowels('IceCreAm'));