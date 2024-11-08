const thirdMaximum = function (arr) {
    let sortArr = arr.sort((a, b) => b - a);
    let thirdMax = 0;
    let newset = new Set(sortArr);
    if (newset.size === 2 || newset.size === 1) return Array.from(newset)[0];

    for (let i = 0; i < Array.from(newset).length; i++) {
        if (i == 2) {
            thirdMax = Array.from(newset)[i];
            break;
        }
    }
    return thirdMax;
}
console.log(thirdMaximum([3, 2, 1]));