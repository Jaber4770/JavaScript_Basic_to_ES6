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




// making additin of sum from an arra_________________________:


function additionFromArray(array) {
    let initialAddition = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayValue = array[i];
        initialAddition += arrayValue;
    }
    return initialAddition;
}


let numbersArray = [23, 34, 54, 65, 76, 56, 54];
let totalOFArray = additionFromArray(numbersArray);
console.log("total of the array: ", totalOFArray);



// filtering all the odd number from an array____________________:

function oddNumberFiltering(Numbers) {
    let filteredOdd = [];
    for(let i = 0; i<Numbers.length; i++){
        let index = i;
        let element = Numbers[index];
        if( element % 2 !== 0){
            filteredOdd.push(element);
        }
    }
    return filteredOdd;
}

let numbersArry = [23, 34, 45, 56, 67, 76, 86, 97, 65, 34];
let getOddResult = oddNumberFiltering(numbersArry);
console.log(getOddResult);
let oddNumberAddition = additionFromArray(getOddResult);
console.log("Filtered from the array of to Odd and the Odd sum is: ", oddNumberAddition);



// addition fo numbers by factorial_________________________________________:



