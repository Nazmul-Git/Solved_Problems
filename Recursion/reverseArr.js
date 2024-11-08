const reverseArr = function(arr, l, r){
    
    if(l>=r) return arr;
    let temp= arr[l];
    arr[l]=arr[r];
    arr[r]= temp;
    return reverseArr(arr,l+1, r-1);
}
let arr=[1,2,3,4,2];
let l=0, r= arr.length-1;
console.log(reverseArr(arr, l, r));


// ------------------------------


var reverseString = function(s) {
    let l=0, r=s.length-1;
    while(l<r){
        let temp = s[l];
        s[l]=s[r];
        s[r]=temp;
        l++;
        r--;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]));