var threeSum = function (nums) {
    let newMap = new Map();
    let sum = 0;
    let resultArr = [];
    
    for (let i = 0; i < nums.length; i++) {
        newMap.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i] + nums[i + 1];
        if (sum < 0) {
            let absNum = Math.abs(sum);
            if (newMap.has(absNum)) {
                let newArr = [nums[i], nums[i + 1], absNum].sort((a, b) => a - b);
                let isDuplicate = resultArr.some(arr => {
                    return arr.toString() === newArr.toString();
                })
                if (!isDuplicate) {
                    resultArr.push(newArr);
                }
            }
        } else {
            let minusSum = sum - (sum + sum);
            if (newMap.has(minusSum)) {
                let newArr = [nums[i], nums[i + 1], minusSum].sort((a, b) => a - b);
                let isDuplicate = resultArr.some(arr => {
                    return arr.toString() === newArr.toString();
                })
                if (!isDuplicate) {
                    resultArr.push(newArr);
                }
            }
        }
    }
    return resultArr;
};

console.log(threeSum([-1,0,1,2,-1,-4]));