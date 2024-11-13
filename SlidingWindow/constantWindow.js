const constantWindow = function (nums, k) {
    let l = 0, r = k - 1;
    let sum = 0, maxSum = 0;

    for (let i = l; i <= r; i++) {
        sum += nums[i];
    }
    while (r < nums.length - 1) {
        sum -= nums[l];
        l++;
        r++;
        sum += nums[r];

        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}
console.log(constantWindow([-1, 2, 3, 3, 4, 5, -1], 4));