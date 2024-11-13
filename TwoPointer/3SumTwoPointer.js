const threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; //the continue statement is used within loops to skip the current iteration and move to the next iteration of the loop. 
        }
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                answer.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            }
            else if (sum < 0) {
                l++;  //Left is increase. because of the array is sorted. to reach 0 I need next bigger number
            }
            else {
                r--;  //Right decrease. because of the array is sorted. To reach 0  I need previous smaller number
            }
        }
    }
    return answer;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));