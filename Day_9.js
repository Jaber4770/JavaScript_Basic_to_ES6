let names = "jack";
let isTrue = true;
let age = 54;
const studnets = {
    names: 'jack',
    id: 708
}
const frineds = [23, 34, 45, 46];
function add(numb1, numb2) {
    return numb1 + numb2;
}


// checking typeOf___________________________________:

console.log(typeof names);
console.log(typeof isTrue);
console.log(typeof age);
console.log(typeof studnets);
console.log(typeof frineds);
console.log(typeof add);

// way to check type of array;

console.log("This is array: ", Array.isArray(frineds));

// finding value from an array______________________________________________:

let getInfoFromArray = frineds.includes(45);
console.log("your value is exits on array: ", getInfoFromArray);

// adding two array by concat___________________________:
let arry1 = [234, 34, 45, 4, 565, 5, 6, 34, 454, 454, 43, 4];
let arry2 = [56, 56, 787, 63, 5, 6, 45, 87, 5, 5, 45, 54];
let concatTwoArray = arry1.concat(arry2);
console.log(concatTwoArray);