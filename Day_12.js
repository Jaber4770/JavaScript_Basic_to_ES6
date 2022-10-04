// incremental__________________:
let sum = 0;
for(let i = 1; i<=5; i++){
    sum += i;
}
console.log(sum);


// decremental_________________:
let sumDecremental = 0;
for(let i =5; i>=1; i--){
    sumDecremental += i;
}
console.log(sumDecremental);


function sumFunction(i){
    if( i === 1){
        return 1;
    }
    return i + sumFunction(i-1);
}

const sumResult = sumFunction(5);
console.log(sumResult);


// factorial____________:
let factorial = 1;
for(let i = 5; i >= 1; i--){
    factorial *= i;
}
console.log(factorial);