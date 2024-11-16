const slidingWindowMaximum = function (nums, k) {
    
    let result = [];
    let l = 0, r = k - 1;
    
    while (r < nums.length) {
        let max = -Infinity;
        for (let i = l; i <= r; i++) {
            max = Math.max(max, nums[i]);
        }
        result.push(max); 

        // moving window
        l++;
        r++;
    }
    return result;
}
console.log(slidingWindowMaximum([1], 1));