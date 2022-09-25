// Practice day - 8;


let firstName = "Jaber";
let lastName = "Ahmed";
let fullName = firstName + lastName;
console.log(fullName);

console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

// fullName.[0] = "B";
// we can not push to a string. string index look like array. but it is not array.


console.log(fullName);

console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.toLocaleLowerCase());


let lyric = "Tomi bondo kala pakhi ami jno ki. boshonto kale tomay bolte pari ni. sada sada kala kalk."
console.log(lyric.includes('bondo'));

let lyricLowerCase = lyric.toLowerCase();
console.log(lyricLowerCase.includes("tomi"));


let searchString = "BoNDo";
let searchLowerCase = searchString.toLowerCase();
let getResult = lyricLowerCase.includes(searchLowerCase);
console.log("your search result does exist: ", getResult);

// _______________________________________searching first word from an string___________________
// indexOf will show the first word index____________:

let lyrics = "sada sada kala kala rong jomeche sada kala, hoisi ami mon pagela boshonto kale.";
let getKala = lyric.indexOf("kala");
console.log(getKala);

console.log("rong index; ", lyrics.indexOf("rong"));


// ______________________startWith___________endWith___________________:

let startWith = lyrics.startsWith("sada");
console.log("start with sada", startWith);


let endWith = lyrics.endsWith("kale.");
console.log("end with kala", endWith);



// we can check the file extention with this: 

let dataExtention = "biodata.pdf";
console.log("file is pdf: ", dataExtention.endsWith(".pdf"));


let markSheet = "Jaber-Ahmed-MarkSheet.pdf";
if (markSheet.endsWith("pdf") === true) {
  console.log("your file is pdf.");
}
else {
  console.log("please choose a pdf file.")
}



// ________________split and join_____________________:

let dummyText = "the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog. the quick brown fox  jumps over the lazy dog. the quick brown fox jumps over the lazy dog.";

let sentenceSplit = dummyText.split('.');
console.log(sentenceSplit);
console.log("space split: ", dummyText.split(' '));
console.log("letter split: ", dummyText.split(''));


// _________________________________________Slice______Slice work with index_________:


let loremText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et ullam ducimus architecto saepe temporibus impedit animi facilis sapiente? Non?";


let getPersialText = loremText.slice(0, 5);
console.log(getPersialText);
// slice(3,5) the first value ta soho show korte be but last index tar age porjonto show korbe. 


/* 

     from Mozila developer site string nia aro onk porte parbo.


*/

// substring________________________:

let ganlyric = "tmi bndo kala pakhi";

let getSubstrings = ganlyric.substring(5, 10);
console.log(getSubstrings);



// _____________Join lines____________:

let linesArray = [
  'The quick brown fox jumps over the lazy dog',
  'The quick brown fox jumps over the lazy dog',
  'The quick brown fox jumps over the lazy dog',
  'The quick brown fox  jumps over the lazy dog',
  'The quick brown fox jumps over the lazy dog'
];

const getJoint = linesArray.join(".");
console.log(getJoint);


//________________________________Math.pow()__________pow = power___________:

let get3ToThePower8 = Math.pow(3, 8);
console.log(get3ToThePower8);

// first value is base and the second value is the power.

/* -----------------------------------------------------
  searching on MDN math on google, i will find the docomentation and then i can read more thing about Math.
  ----------------------------------------------------------------------------------
*/

console.log(Math.random());
console.log(Math.random() * 1000);

let ceilNumber = 5.34;
console.log("ceil: ", Math.ceil(ceilNumber));


let floorNumber = 4.809;
console.log("floor: ", Math.floor(floorNumber));


let negativeVlue = -4;
console.log("make positive: ", Math.abs(negativeVlue));


let floatNumber = 8.5342;
console.log("math round: ", Math.round(floatNumber));



// _________________________________________Swap_________________________:

// way-1:

let first = 5;
let second = 7;
console.log(first, second);

let tempo = first;
first = second;
second = tempo;
console.log(first, second);


// way-2:


[first, second] = [second, first];
console.log(first, second);


// the functin will return the highest value______________________:


function maxNumberGiver(values) {
  let getLargeNumber = Math.max(...values);
  return getLargeNumber;
}


let values = [23, 34, 45];
let getLargerNumber = maxNumberGiver(values);
console.log("The largest number in the array is: ", getLargerNumber);



// the funciton will return the lowest number from an array___________________________:

function lowestNumberGiver(values) {
  let getLowestNumber = Math.min(...values)
  return getLowestNumber;
}

let lowFuncValues = [234, 34, 45, 454, 655, 6, 45, 5, 544, 434, 45, 56, 4];
let getLowestResult = lowestNumberGiver(lowFuncValues);
console.log("the lowest value of the array is: ", getLowestResult);



// the function will return the higest value using loop inside the function______________:

function highestWithLoop(arryValue) {
  let largestElement = arryValue[0];
  for (let i = 0; i < arryValue.length; i++) {
    const index = i;
    const getElement = arryValue[index];
    if (getElement > largestElement) {
      largestElement = getElement;
    }
  }
  return largestElement;
}

let arrayValue = [23, 4, 4, 432, 45, 54, 54, 52, 44, 234, 45, 4];
let getFunctionResult = highestWithLoop(arrayValue);
console.log("the highest value from the array is: ", getFunctionResult);


// The funciton will reply the lowest value using loop indside the functin________________________:

function lowestWithLoop(arrayLowest) {
  let lowest = arrayLowest[0];
  for(let i = 0; i<arrayLowest.length; i++){
    let index = i;
    let element = arrayLowest[index];
    if(lowest > element){
      lowest = element;
    }
  }
  return lowest;
}


let lowestArray = [34, 342, 454, 45, 6, 7, 5, 65, 453, 43, 4];
let getLowest = lowestWithLoop(lowestArray);
console.log("Your lowest number is: ",getLowest);