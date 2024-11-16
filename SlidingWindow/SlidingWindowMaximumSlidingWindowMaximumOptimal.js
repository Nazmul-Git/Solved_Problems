
const slidingWindowMaximum = function (nums, k) {
    
    let result = [];
    let dequeue = [];
    
    for(let i=0; i<nums.length; i++){
        // Remove indices that are out of the current window
        if(dequeue.length && dequeue[0] < i-k+1) dequeue.shift();

        // Remove elements that are smaller than the current element
        // as they are not useful anymore
        while(nums[dequeue[dequeue.length-1]] < nums[i]) dequeue.pop();

        // Add the current element's index to the deque

        dequeue.push(i);
        // Once we've processed the first `k` elements, start adding the maximums to result
        if(i>=k-1) result.push(nums[dequeue[0]]);
    }
    return result;
}
console.log(slidingWindowMaximum([1], 1));

