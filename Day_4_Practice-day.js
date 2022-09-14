// how to declare a variable: 

var variable1 = 5;
let variable2 = "this is a string";
const variable3 = true;

variable1 = "variable valued changed to this text";
console.log(variable1);

// oparation________________________+, -, *, /, %_____________________________:


let oparationNum1 = 5;
let oparationNum2 = 4;
console.log("addition of two oparationNum is: ", oparationNum1 + oparationNum2);
console.log("subtractin of two oparationNum is: ", oparationNum1 - oparationNum2);
console.log("multiplication of two oparationNum is: ", oparationNum1 * oparationNum2);
console.log("division of two oparationNum is: ", oparationNum1 / oparationNum2);
console.log("remainder of two oparationNum is: ", oparationNum1 % oparationNum2);


// shorthand_________________+=, -=, *=, /=______________________________________:

let price = 5;
price += 4;
console.log(price);

let price2 = 4;
price2 -= 3;
console.log(price2);

let price3 = 9;
price3 *= 2;
console.log(price3);

let price4 = 6;
price4 /= 2;
console.log(price4);

// incremental and decremental_________________________--_______++__________:

let incrementalNum = 4;
incrementalNum++;
console.log(incrementalNum);

let decrementalNum = 5;
decrementalNum--;
console.log(decrementalNum);


// ____parseInt________parseFloat__________toFixed_________________:

let textValue = "45";
console.log("textValue is: ", textValue);
let numericValue = 45.4545;
console.log("numeric value is: ", numericValue);

console.log("text value to integer: ", parseInt(textValue));
console.log("numeric number is: ", parseInt(numericValue));


let parseFlotNumbe = "35.432";
console.log(parseFlotNumbe);
console.log("parseFloat Number is: ", parseFloat(parseFlotNumbe));

// ________array___________________array___________________array___________________array___________________array___

let component = ['router', 'mouse', 'keyboard', 'monitor', 'cpu', 'multiplug', 'speaker'];

console.log('the element number of component arry: ', component.length);
component[4] = 'pc';
console.log(component);

console.log("in index of 4, the element is: ",component[4]);
console.log("position of speaker: ",component.indexOf("speaker"));
console.log(component);

// add and remove the last element of an array:
component.push('wifi dongol');
console.log(component);
component.pop();
console.log(component);


// remove and add first element of an array:
component.shift();
console.log(component);
component.unshift('router');
console.log(component);
