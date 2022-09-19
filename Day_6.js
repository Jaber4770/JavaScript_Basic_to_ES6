// Today we will apply all the conecpt we learned:


// inch to feet convert calculation:

function inchToFeet(inch) {
    let convertToFeet = inch / 12;
    return convertToFeet;
}

let sendingInch = 45;
let getFeetResult = inchToFeet(sendingInch);
console.log(getFeetResult, "feet");


let sendingInch2 = 299;
let getFeetResult2 = inchToFeet(sendingInch2);
console.log(getFeetResult2, "feet");



// Convertion of Miles to Kilo Meter_____________________________:

function milesToKm(miles) {
    let getKm = miles / 1.60934;
    return getKm;
}


let sendingMiles = 234;
let getKmResult = milesToKm(sendingMiles);
console.log(getKmResult, "KM");


// Gram to KG convertion___________________________:

function GramToKG(gram) {
    let getKgResult = gram / 1000;
    return getKgResult;
}


let sendingGram = 3434324;
let KgResult = GramToKG(sendingGram);
console.log(KgResult, "KG");



// checking a number it is even or add________________:

function isEven(checkNumber) {
    if ((checkNumber % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}


let evenCheckingNumber = 46;
let getEvenResult = isEven(evenCheckingNumber);
console.log("your number is even: ", getEvenResult);


// checking leap year__________________________________:

function isLeapYear(year) {
    let remainder = year % 2;
    if (remainder === 0) {
        return ("your Year is leap year.");
    }

    return ("your Year is not leap year.");
}


let checkingYear = 2020;
let leapYearResult = isLeapYear(checkingYear);
console.log(leapYearResult);