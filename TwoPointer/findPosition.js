var searchRange = function(nums, target) {
    let start=-1;
    let end = -1;

    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            start=i;
            break;
        }
    }
    if(start === -1) return [-1,-1];
    for(let i=nums.length-1; i>=0; i--){
        if(nums[i]=== target){
            end=i;
            break;
        }
    }
    return [start, end];
};

console.log(searchRange([1], 1));