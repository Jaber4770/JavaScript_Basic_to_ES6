// variable
var varNumber = 5;

// addition
var eggPrice = 20;
var onionPrice = 20;
let totalPrice = eggPrice + onionPrice;
console.log(totalPrice);


// subtraction
let fishPrice = 500;
let myMoney = 600;
let backMoney = myMoney - fishPrice;
console.log(backMoney);


// divided
let totalTk = 1000;
let player = 11;
let everyOneGet = totalTk / player;
console.log(everyOneGet);


// multiplication
let oneMangoPrice = 15;
let mangoQuantity = 24;
let totalMangoPrice = oneMangoPrice * mangoQuantity;
console.log(totalMangoPrice);


// short hand

// addition
console.log("addition");
let price1 = 40;
console.log(price1);
price1 = price1 + 10;
console.log(price1);
price1 += 5;
console.log(price1);

// subtraction
console.log("subtraction");
let price2 = 30;
console.log(price2);
price2 = price2 - 1;
console.log(price2);
price2 += 1;
console.log(price2);

// multiplication 
console.log("multiplication");
let price3 = 20;
console.log(price3);
price3 = price3 * 2;
console.log(price3);
price3 *= 2;
console.log(price3);

// divition
console.log("divition");
let price4 = 10;
console.log(price4);
price4 = price4 * 2;
console.log(price4);
price4 *= 2;
console.log(price4);


// increment
console.log("increment");
let price5 = 5;
console.log(price5);
price5++;
console.log(price5);

// decremental
console.log("decremental");
let price6 = 6;
console.log(price6);
price6--;
console.log(price6);


// addition of string

console.log("addition of string");
let firstName = "Jaber";
let lastName = "Ahmed";
console.log(firstName + " " + lastName);


// number like string
console.log("number like string");
let Number1 = 10;
let Number2 = "2";
console.log(Number1 + Number2);

let Number3 = "10";
let Number4 = 2;
console.log(Number3 + Number4);


// "number text" to numeric
// parseInt
console.log("number text to numeric");
let textNumber = "234";
console.log(textNumber);
let convertedNumber = parseInt(textNumber);
console.log(convertedNumber);

// parseFloat
console.log("parseFloat");
let decimalNumber = '5.02165';
console.log(decimalNumber);
let convertedDciToNum = parseFloat(decimalNumber);
console.log(convertedDciToNum);

// toFixed;
console.log("toFixed");
let deciNum1 = 0.1;
let deciNum2 = 0.2;
let sumOfDeciNum = deciNum1 + deciNum2;
console.log(sumOfDeciNum);
let fixedDeciNum = sumOfDeciNum.toFixed(2);
console.log(fixedDeciNum);



// "/" this oparator is called diviton oparator
//  "%" this oparatior is called remainder / modulous oparator

// modulous opeartor
console.log("modulous opearator")
let mangoes = 5;
let person = 2;
console.log("remainder", mangoes % person);



// todays task______________________________________________________________________________________

// practice task_1
console.log("harrys math____________");
let harrysMomGive = 1000;
console.log("harrys mother give him", harrysMomGive);
let harryOrangePrice = 400;
let harryApplePrice = 300;
let harryBrought = harryApplePrice + harryOrangePrice;
console.log("he brought", harryBrought);
let shopKeeperReturn = harrysMomGive - harryBrought;
console.log("harry get return from shop keeper", shopKeeperReturn);


// practice task_2________________________________________________________________
console.log("practice task 2");
let mathematics = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;

let totalMarks = mathematics + biology + chemistry + physics + bangla;
console.log(totalMarks);

let avarageMarks = totalMarks / 5;
console.log(avarageMarks);
let fixedAvarageMarks = avarageMarks.toFixed(2);
console.log(fixedAvarageMarks);
let convertedToNum = parseFloat(fixedAvarageMarks);
console.log(convertedToNum);

// practice problem-3_______________________________________________________
console.log("practice problem 3");
let firstLine = 'I am going to be';
let lastLine = "as awesome web developer";
let fullLine = firstLine + ' ' + lastLine;
console.log(fullLine);

// practice problem 4______________________________________________________________
console.log("practice problem 4");
let sarahsMotherNum = 119;
let dividedNum = 5;
let remainder = sarahsMotherNum % dividedNum;
console.log("sarah's answer would be", remainder);
