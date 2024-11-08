const printName= function(n){
    if(n>5) return n;
    let name = 'sunny';
    console.log(name);
    printName(n+1);
}

printName(1);