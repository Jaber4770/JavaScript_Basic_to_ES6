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
console.log("less and equal", 5<= 5);
console.log("less and equal", 5<= 8);
console.log("greater and equal", 8>= 5);
console.log("greater or equal", 9>=9);


// if else Condition______________if else Condition______________if else Condition______________

let eggPrice = 50;
let myMoney = 60;
if(eggPrice < myMoney){
    console.log("mama ek hali dim den");
}
else{
    console.log("mama 2 ta dim den");
}

// another conditon

let orangePrice = 150;
let applePrice = 120;
if(applePrice < orangePrice){
    console.log("Mama apple den.");
}
else{
    console.log("Mama Orange den.");
}
