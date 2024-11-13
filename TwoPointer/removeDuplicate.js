const removeDuplicate = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
console.log(removeDuplicate([1, 1, 2, 2, 2, 3, 3]));