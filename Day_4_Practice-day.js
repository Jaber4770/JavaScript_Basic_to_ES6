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

console.log("in index of 4, the element is: ", component[4]);
console.log("position of speaker: ", component.indexOf("speaker"));
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


// comparision:_____________>, <, ==, !=, <=, >=, ===, !==, &&, ।।____________

/**


*) > = greater than
 *) < = lessthan
 *) == = equal
 *) != = not equal
 *) <= = less equal
 *) >= = greater equal
 *) === = equal two value with type
 *) !== = not equal
 *) && = two condition have to be true
 *) || = between two condition, if one condition is true it will work 


 */



/*  ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
*/


let myMoney = 50000;
let macBookPrice = 80000;
let gamingLaptopPrice = 60000;
let lenevoYogaPrice = 40000;
let oldLaptop = 20000;
if (macBookPrice < myMoney) {
    console.log("give me a mac book pro");
}
else if (gamingLaptopPrice < myMoney) {
    console.log("give me a gaming laptop");
}
else if (lenevoYogaPrice < myMoney) {
    console.log('give me a lenevo yoga price');
}
else if (oldLaptop < myMoney) {
    console.log("give me a old model laptop");
}
else {
    console.log("you can work with your mobile phone");
}

// ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

for (let i = 1; i <= 39; i++) {
    console.log(i, ")", "ajk amr mon bhalo nei.");
}

// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 

for (let i = 58; i <= 98; i++) {
    console.log("The numbe is: ", i);
}


// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

for (let i = 412; i <= 456; i++) {
    console.log("the even number is: ", i);
    i += 1;
}

// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও

for (let i = 581; i <= 623; i++) {
    console.log("Odd number is: ", i);
    i += 1;
}

// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

