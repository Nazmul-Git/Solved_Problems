const countTen = function (count=1) {
    if (count > 10) return;
    console.log(count);
    countTen(count+1);

}
countTen()