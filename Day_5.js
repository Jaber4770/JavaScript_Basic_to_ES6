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







