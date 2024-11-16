const longestSubarray = function (nums, k) {
    let l = 0, r = 0;
    let sum = 0;
    let maxLength = 0;

    while (r < nums.length) {
        sum += nums[r];
        if (sum > k) {
            sum -= nums[l];
            l++;
        }
        else if (sum <= k) {
            maxLength = Math.max(maxLength, r - l + 1);
        }
        r += 1;
    }
    return maxLength;
}
console.log(longestSubarray([2, 5, 1, 1, 1, 5, 1], 14));  // [2, 5, 1, 1, 1, 5] = 5