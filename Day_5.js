// slice_______________________________:
let numArry = [3, 4, 54, 7, 6, 43, 54, 76, 65, 54, 34];
console.log(numArry.slice(2, 5));


// includes__________it is case sensative__________________:
let myName = "My name is Jaber Ahmed";
console.log("The word i am searching it contain the variable is: ", myName.includes("is"));
console.log("The word i am searching it contain the variable is: ", myName.includes("Name"));



// substring______________________________________________:

let amrName = "Jaber Ahmed Sijan";
console.log("substring is: ", amrName.substring(0, 7));


// function:__________________________________________:

function startFan() {
    console.log("1) stand up");
    console.log("2) go to switch board");
    console.log("3) press the fan switch");
}

startFan();
console.log("***) we can call e function in several time, we call any time when we need the function.");
startFan();



// function with parameter______________________________:


function bringSingara(money) {
    console.log("mama singara den");
    console.log(money, "tk dise");
    let singaraPrice = 12;
    let singaraQuantity = money / singaraPrice;
    console.log('350 tk dia singara dise: ', singaraQuantity);

}

bringSingara(360);



// addition of few numbers_________________________:

function sum(a, b, c, d, e) {
    console.log(a, b, c, d, e);
    let addition = a + b + c + d + e;
    console.log(addition);
}

sum(2, 3, 4, 5, 6);


// function with return_____________________________________:

function numberAddition(number1, number2) {
    console.log("perameters are: ", number1, "and", number2);
    let sum = number1 + number2;
    return sum;
}


let num1 = 10;
let num2 = 10;
let total = numberAddition(num1, num2);
console.log("addition of the function: ", total);

// object____________________________________________:


let myPhone = {
    brand: 'samsung',
    color: 'blue',
    storage: '64gb',
    ram: '6gb',
    rearCamera: '64MP',
    frontCamera: '32MP',
    battery: '6000mAh'
}


console.log(myPhone);
console.log(myPhone.color);




let myPc = {
    processor: "i9",
    hdd: "2TB",
    ram: "8gb",
    price: "21k"
}

console.log(myPc);
myPc.hdd = "2.240TB"
console.log(myPc);


// another object______________________________________________:

let phone = {
    brand: "samsung",
    color: "black",
    ram: "6gb",
    storage: "64gb"
}
console.log("phone object: ", phone);
phone.color = "blue";
console.log("new object: ", phone);


let phoneCompany = {
    company1: "Samsung",
    company2: "Iphone",
    company3: "Xiomi",
    company3: "Oppo",
    company4: "Lenevo",
    company5: "One Plus",
    company6: "Lava",
    company7: "lg"
}
console.log(phoneCompany);

// how to access the value of an key: 

let keyValue = phoneCompany.company1;
console.log(keyValue);

// another way to access the keys value: 

let keysValue2 = phoneCompany['company2'];
console.log(keysValue2);

// getting access all the property name of the object: 
let getThePropertyOfAnObject = Object.keys(phoneCompany);
console.log(getThePropertyOfAnObject)

// getting access all the value name of the object: 
let getTheValueOFAnObject2 = Object.values(phoneCompany);
console.log(getTheValueOFAnObject2);


// an another way to get the keys value of an array: 
let propertyName = "company5";
let propertyValue = phoneCompany[propertyName];
console.log(propertyName, propertyValue);



let pcConfig = {
    processor: "i9",
    motherBoard: " 610",
    ram: "16gb",
    storage: "1TB"
}

// all the way to get access object: 
console.log(pcConfig);
console.log(pcConfig.ram);
console.log(pcConfig['ram']);
let objectProperty = "processor";
console.log("using variable way: ", pcConfig[objectProperty]);
let pcStorage = "storage"
console.log('this is second: ', pcConfig[pcStorage]);


// getting all the keys name of the object: 
console.log(Object.keys(pcConfig));

// getting all the value name fo the object: 
console.log(Object.values(pcConfig));


// we can add object property and value like we get access the value and property:

let element = {
    mouse: 4,
    book: 5,
    pen: 2,
    keyboard: 4
}

console.log(element);
element.mouse = 30;
console.log(element);
element['book'] = 40;
console.log(element);
let elementName = 'pen';
element[elementName] = 50;
console.log(element);



// throughing loop in a object______THIS IS A HARD WAY _______________________:
console.log("// throughing loop in a object_____________________________:")
// we can declare more  variable with same name but it should be declare wit var. let and const are not maintain this rule;


var shoppingCart = {
    pant: 5,
    shirt: 3,
    tShirt: 9,
    jota: 3,
    shortPant: 9
}

console.log(shoppingCart);

let getPropertyName = Object.keys(shoppingCart);
let getValuesName = Object.values(shoppingCart);

console.log(getPropertyName, "=", getValuesName);

for (let i = 0; i < getPropertyName.length; i++) {
    let keysName = getPropertyName[i];
    let valuesName = shoppingCart[keysName];
    console.log(keysName, valuesName);
}


// we can acces data from an object using for in loop. for in loop use to get access data from object.
// easy way to get access data from an object by for in:
console.log("// easy way to get access data from an object by for in:")

var shoppingCart = {
    pant: 5,
    shirt: 3,
    tShirt: 9,
    jota: 3,
    shortPant: 9
}

for (let shoppingPropertyName in shoppingCart) {
    let shoppingValues = shoppingCart[shoppingPropertyName];
    console.log(shoppingPropertyName, "=", shoppingValues);
}

// ^^^^ here we can get access keys and value from a object easily:


// Object entries; 
// we can convert  a object to array; 
console.log(Object.entries(shoppingCart));


// an fast alternative of if else is stwitch: 

let color = 'red';

switch (color) {
    case 'red':
        console.log("your color is red");
        break;
    case 'white':
        console.log("your color is white");
        break;
    case 'purple':
        console.log("your color is purple");
        break;
    case 'green':
        console.log("your color i s green");
        break;
    default:
        console.log("you are a fan of black");
}

// pracice problem__________________:

// foo bar function: 
function foo() {
    console.log("foo");
    bar();
}

function bar() {
    console.log("bar");
}

foo();


// make avarage function__________________________________________:

function make_avg(numb1, numb2, numb3) {
    let sumOfTheNumb = numb1 + numb2 + numb3;
    let avarage = sumOfTheNumb / 3;
    return avarage;
}

let numb1 = 3;
let numb2 = 4;
let numb3 = 5;
let getTheResult = make_avg(numb1, numb2, numb3);
console.log(getTheResult);

// make avarage calculation from an arra__________________________:

// i didn't complate this problem. i am confused.



// odd or even number testing function______________________________:

/* 
Way -1

function odd_even(checkNumber){
    let oddOrEven = checkNumber / 2;
    return oddOrEven;
}


let getResult = odd_even(6);
console.log("Your number odd or even: ",getResult);

*/


// Way -2

function odd_even(checkNumber) {
    if ((checkNumber % 2) == 0) {
        console.log('your number is even.');
    }
    else {
        console.log('your  number odd.')
    }
}


let getResult = odd_even(6);



// Road Cross signal________________________________________:

// way-1________this is if else way________________:
let signal = "yellow";

if (signal == "red") {
    console.log("Your color is Red");
}
else if (signal == "green") {
    console.log("Your color is Green");
}
else if (signal == "yellow") {
    console.log("Your color is Yellow");
}
else {
    console.log("You have no color.")
}

// 
let switchColor = "red";

switch (switchColor){
    case "green":
        console.log("You should not cross the road");
        break;
    case "yellow":
        console.log("Your should be stop");
        break;
    case "red":
        console.log("You can cross the road now.");
        break;
    default:
        console.log("you should not cross the road.");
}






