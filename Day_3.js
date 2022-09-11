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