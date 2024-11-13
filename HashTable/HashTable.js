function twoSum(nums, target) {
    const hashMap = new Map(); 
    for (const [index, num] of nums.entries()) {
        const complement = target - num;       // 2,7,11,5
        console.log(hashMap.has(complement));  // false, false, false, true
        console.log(hashMap.keys()) 
        console.log(hashMap.values()) 
        if (hashMap.has(complement)) {  //true
            return [hashMap.get(complement), index]; // [1,3]
        }
        hashMap.set(num, index);
    }
    return [];
}
// Example usage :
const nums = [2, 7, 11, 5, 15, 30];
const target = 12;
const result = twoSum(nums, target);

console.log(`Indices of the two numbers that add up to ${target} : [${result.join(' , ')}]`);
