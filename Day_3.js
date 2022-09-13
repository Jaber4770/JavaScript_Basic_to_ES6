// Revise previous day code:
let reviseVar = "revise";
let waterBottle = "water";
let todaysNum = 3;
let arry = ["revise", "water", "bottle", "glass"];
arry.indexOf("revise");
console.log(arry[2]);
arry.push("motiya");
console.log(arry);
arry.pop();
arry.shift();
arry.unshift("halka mote suiye poren.");
if (4 > 2) {
    console.log("its false");
}
else {
    console.log("it's true");
}

// Loop_______________Loop___________Loop_______________Loop___________Loop_______________Loop___________Loop_______________Loop___________



// while loop

let roastGiven = 0;
while (roastGiven < 8) {
    console.log("mama roast den please.", roastGiven);
    roastGiven++
}

// salad serving loop
let saladGiving = 0;
while (saladGiving < 5) {
    console.log("Mama salad dia jan.", saladGiving);
    saladGiving++;
}


// showing 1-10 numbers

let startNumber = 1;
while (startNumber <= 10) {
    console.log(startNumber);
    startNumber++;
}


// showing even number by loop

let evenNumber = 0;
while (evenNumber <= 10) {
    console.log("your even number is: ", evenNumber);
    evenNumber += 2;
}

// showing odd number by loop
let oddNumber = 1;
while (oddNumber <= 10) {
    console.log("your odd number is: ", oddNumber);
    oddNumber += 2;
}


// for_loop_____for_loop_____for_loop_____for_loop_____for_loop_____for_loop_____for_loop_____for_loop_____

// for loop large version:
for (let roastGiven = 0; roastGiven <= 5; roastGiven++) {
    console.log("roast diye jan.", roastGiven);
}

// we can use i, if we write e large variable name. we can write but we can write it simply. so we can ue "i";
// for loop simple version:
for (let i = 1; i <= 5; i++) {
    console.log("the value: ", i);
}


/* 
    alt + shift + a , for multi line comment.
*/


// showing data from an array:


let numArry = [234, 343, 54, 545, 56, 56, 565, 67, 7, 67, 6,];
for (let i = 0; i <= numArry.length; i++) {
    console.log("array item", numArry[i]);
}

// another array:

let items = ["jog", "mog", "pani", "tel", "bel"];
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// _____Break_____________Break_____________Break_____________Break_____________Break_____________Break_____________Break________


let breakArry = [234, 55, 46, 768, 456, 345, 546, 435, 345, 34, 54, 565, 454, 35];
for (let i = 0; i < breakArry.length; i++) {
    if (breakArry[i] > 300) {
        break;
    }
    console.log(breakArry[i]);
}