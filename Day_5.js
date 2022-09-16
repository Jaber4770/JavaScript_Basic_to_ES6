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

function numberAddition(number1, number2){
    console.log("perameters are: ", number1, "and", number2);
    let sum = number1 + number2;
    return sum;
}


let num1 = 10;
let num2 = 10;
let total = numberAddition(num1, num2);
console.log("addition of the function: ",total);

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

let phone= {
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