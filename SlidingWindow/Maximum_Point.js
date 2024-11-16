//  Maximum point you can obtain from card

const MaximumPoint = function(nums, k){
    let leftSum =0, rightSum=0, maxSum=0;
    for(let i=0; i<k-1; i++){
        leftSum += nums[i];
        maxSum = leftSum;
    }
    let r = nums.length-1;
    for(let i=k-1; i>=0; i--){
        leftSum -=nums[i];
        rightSum += nums[r];
        r--;
        maxSum = Math.max(maxSum, leftSum+rightSum);
    }
    return maxSum;

}
console.log(MaximumPoint([10,4,1,1,6,2,7,1,3,0,40], 4));