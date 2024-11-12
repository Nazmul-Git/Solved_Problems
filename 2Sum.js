const twoSum= function(nums, target){
    let i = 0;
    for(let j=i+1; j<nums.length; j++){
        let sum = nums[i] +nums[j];
        if(sum === target){
            return [i, j];
        }
        else if(j === nums.length-1){
            i++;
            j=i;
        }
    }
    return [];
}
console.log(twoSum([3,2,4], 6));