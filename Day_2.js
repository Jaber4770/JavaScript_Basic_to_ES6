// array__________array__________array__________array__________array__________array__________

let numberArray = [23, 34, 545, 65, 65, 76, 767, 67, 6, 7, 67];
let stringArray = ["moto", "patlu", "khasitaram", "chinggam", "Dr.Jatka"];
console.log(numberArray);
// check how long the array by length
console.log(numberArray.length);
// showing the array on the terminal
console.log(stringArray);
console.log(stringArray.length);
// check index by position;        index start with zero, 0;
console.log(numberArray[0]);

// find element by searching the element with indexOf();
console.log(numberArray.indexOf(67));


// by using "push" we can add element of an array in the last.
let friendsName = ["hello", "gelo", "telo", "melo", "pelo"];
console.log(friendsName);
friendsName.push("tilo");
console.log(friendsName);
friendsName.push("gilo");
console.log(friendsName);


// pop, using pop we can remove the last element of an array;
let component = ["monitor", "mouse", "key-board", "cpu", "watch"];
console.log(component);
component.pop();
console.log(component);


// shift, using shift we can remove element in front of array;
let component2 = ["watch", "glass", "pen", "powder", "charger", "speaker"];
console.log(component2);
component2.shift();
console.log(component2);

// unshift, using unshift we can remove element in front of array;
let component3 = ["multiPlug", "pen", "alarm", "watch", "monitor"];
console.log(component3);
component3.unshift("mouse-pad");
console.log(component3)



// comparison_________comparison_________comparison_________comparison_________comparison_________

//_____ >, <, ==, !=, <=, >=

console.log("greaterthan", 5 > 6);
console.log("greaterthan", 5 > 4);
console.log("lessthan", 5 < 8);
console.log("lessthan", 9 < 8);
console.log("equal", 5 == 5);
console.log("equal", 5 == 3);
console.log("not equal", 5 != 5);
console.log("not equal", 5 != 4);
console.log("less and equal", 5 <= 5);
console.log("less and equal", 5 <= 8);
console.log("greater and equal", 8 >= 5);
console.log("greater or equal", 9 >= 9);


// if else Condition______________if else Condition______________if else Condition______________

let eggPrice = 50;
let myMoney = 60;
if (eggPrice < myMoney) {
    console.log("mama ek hali dim den");
}
else {
    console.log("mama 2 ta dim den");
}

// another conditon

let orangePrice = 150;
let applePrice = 120;
if (applePrice < orangePrice) {
    console.log("Mama apple den.");
}
else {
    console.log("Mama Orange den.");
}




// multiple_Condition____________multiple_Condition____________multiple_Condition____________multiple_Condition
// ____________&&_______AND____________&&_______AND____________&&_______AND____________&&_______AND

let isGraduated = true;
let salary = 50000;
let car = 1;
if ((isGraduated == true) && (salary >= 50000) && (car >= 1)) {
    console.log("You can Marry now");
}
else {
    console.log("You can not marry, Work hard");
}

// another condition
let bachelorPassed = true;
let perMonthIncome = 40000;
let bike = true;
if ((bachelorPassed == true) && (perMonthIncome >= 30000) && (bike == true)) {
    console.log("tmi ekhn prem korte parba.");
}
else {
    console.log("tmi prem korte parba na. jaw income koro giya.");
}

// or_Condition__||____or_Condition__||____or_Condition__||____or_Condition__||____or_Condition__||____

let isJob = true;
let goodSalary = true;
let byCycle = 1;
let motorBike = 0;
if ((isJob == true && motorBike === 1) || motorBike === 0) {
    console.log("You are handsome");
}
else {
    console.log("work hard to achive these");
}



// Nested if else condition
// if___else____if__else____________// if___else____if__else____________// if___else____if__else____________
let myBudget = 30;
let butterBonPrice = 20;
let toastBiscuitPrice = 15;
let danishPrice = 30;
if (danishPrice <= myBudget) {
    console.log("Mama danish den");
}
else if (butterBonPrice === myBudget) {
    console.log("mama butterbon den");
}
else if (toastBiscuitPrice <= myBudget) {
    console.log("chubaiya chubaiya toast biscuit khamo");
}
else {
    console.log("Mama cha den, cha health er jonno bhalo.");
}

// new condition
let math = true;
let geomatry = true
let straightLine = true;
if (math === true) {
    if (geomatry == true) {
        console.log("You are good at math.");
    }
    else {
        console.log("you are pocha.");
    }
}
else {
    console.log("Please, go the math coaching center to lear all the math");
}

// practice problem_________practice problem_________practice problem_________practice problem_________

// problem___1_________________________________________________________________________________

let fruits = ["apple", "banana", "orange"];
console.log("index of banana", fruits.indexOf("banana"));
fruits[1] = "Mango";
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push("watermelon");
console.log(fruits);

// practice problem___2practice problem 2__practice problem 2________________________________________
let myScore = 95;
let tomScore = 66;
let janesScore = 95;
let peterScore = 56;
let johnsScore = 40;

if (myScore >= 80) {
    console.log("you got grade A");
}
else if (myScore >= 60) {
    console.log("you got grade B");
}
else if (myScore >= 50) {
    console.log("you got grade c");
}
else if (myScore >= 40) {
    console.log("you got grade D");
}
else if (myScore <= 39) {
    console.log("you got fail in exam");
}
else {
    console.log("you did not attend in the exam");
}



// practice problem 3_______practice problem 3_______practice problem 3___________________________________

let firstSide = 9;
let secondSide = 8;
let thirdSide = 9;
if ((firstSide === secondSide) || (secondSide === thirdSide) || (firstSide === thirdSide)){
    console.log("your triangle is  isosceles triangle");
}
else{
    console.log("dhoro mia, ki tribhoj ansen! Vagen");
}

// ___practice problem ___4___practice problem ___4___practice problem ___4_________________________________
let probNum1 = 13;
let probNum2 = 79;
let probNum3 = 45;
if(probNum1 > probNum2){
    console.log("first number is largest");
}
else if(probNum2 > probNum3){
    console.log("second number is the largest");
}
else if( probNum3 > probNum1){
    console.log("third number is the largest");
}
else if(probNum2 > probNum1){
    console.log("second number is the largest2");
}
else if(probNum3 > probNum2){
    console.log("third number is the largest2");
}
else{
    console.log("your number is invalid");
}
