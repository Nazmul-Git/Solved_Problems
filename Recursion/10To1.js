const countTen = function(count){
    if(count<1) return;
    console.log(count);
    countTen(count-1);
}

countTen(10);