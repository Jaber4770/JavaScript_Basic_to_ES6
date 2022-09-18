// Today we will apply all the conecpt we learned:


// inch to feet convert calculation:

function inchToFeet(inch){
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

function milesToKm(miles){
    let getKm = miles /1.60934;
    return getKm;
}


let sendingMiles = 234;
let getKmResult = milesToKm(sendingMiles);
console.log(getKmResult, "KM");


// Gram to KG convertion___________________________:

function GramToKG(gram){
    let getKgResult = gram/1000;
    return getKgResult;
}


let sendingGram = 3434324;
let KgResult = GramToKG(sendingGram);
console.log(KgResult, "KG");





