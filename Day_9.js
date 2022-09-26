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

// _______________________________adding two array by concat___________________________:
let arry1 = [234, 34, 45, 4, 565, 5, 6, 34, 454, 454, 43, 4];
let arry2 = [56, 56, 787, 63, 5, 6, 45, 87, 5, 5, 45, 54];
let concatTwoArray = arry1.concat(arry2);
console.log(concatTwoArray);


// __________if we slice in any array ---- we will get the sliced part but the original array will not be any changed__________slice in array ___________:
let sliceArray = [23, 45, 56, 67, 78, 89, 90, 36];
let slicedArry = sliceArray.slice(2, 5);
console.log(slicedArry);

// __________________________________splice__________________________________:

/* 
    using splice we can remove the element from an arry, slice copy them and splice remove them. that is the diffrence. 
    splice change the original array;
    if we want, we can add new element in the removed element place.
*/

let spliceArray = [44, 45, 56, 67, 67, 78, 9, 8, 67, 65, 45, 43, 32, 21, 23];
console.log("full array: ", spliceArray);
// splice first value start delete from this and delete second value, second value is not index number, its count number. mane 2 index soho 5 ta element delete hobe.
let getSplice = spliceArray.splice(2, 5);
console.log('spliced array: ', getSplice);
console.log("after spliced the array: ", spliceArray);



// _____________________finding or removing duplicate element from an array_______________________:

let entryName = ["babul", "ebul", "cabul", "babul", "gabul", "mabul", "abul", "babul", "gabul"];
function removeDuplcates(names){
    let uniqueNames = [];
    for(let i = 0; i<names.length; i++){
        let name = names[i];
        if(uniqueNames.includes(name) === false){
            uniqueNames.push(name);
        }
    }
    return uniqueNames;
}

let getFreshArray = removeDuplcates(entryName);
console.log(getFreshArray);



// showing foo, bar, foobar problem________________________________________________:

for(let i = 1; i<= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("foobar");
    }
    else if(i % 5 === 0){
        console.log("bar");
    }
    else if(i % 3 === 0){
        console.log("foo");
    }
    else{
        console.log(i);
    }
}


// __________________________Calculating Wood______________________________:

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const chairWoodNeed = 3;
    const tableWoodNeed = 10;
    const bedWoodNeed = 50;

    let totalChairWood = chairWoodNeed * chairQuantity;
    let totalTableWood = tableWoodNeed * tableQuantity;
    let totalBedWood = bedWoodNeed * bedQuantity;

    let totalWoodNeed = totalChairWood + totalTableWood + totalBedWood;

    return totalWoodNeed;
}


let chairQuantity = 3;
let tableQuantity = 4;
let bedQuantity = 5;

let getTotalWood = woodCalculator(chairQuantity, tableQuantity, bedQuantity);
console.log("total wood need: ", getTotalWood);