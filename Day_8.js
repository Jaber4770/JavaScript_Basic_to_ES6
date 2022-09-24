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
console.log("start with sada",startWith);


let endWith = lyrics.endsWith("kale.");
console.log("end with kala", endWith);



// we can check the file extention with this: 

let dataExtention = "biodata.pdf";
console.log("file is pdf: ", dataExtention.endsWith(".pdf"));


let markSheet = "Jaber-Ahmed-MarkSheet.pdf";
if(markSheet.endsWith("pdf") === true){
    console.log("your file is pdf.");
}
else{
    console.log("please choose a pdf file.")
}



// ________________split and join_____________________:

let dummyText = "the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog. the quick brown fox  jumps over the lazy dog. the quick brown fox jumps over the lazy dog.";

let sentenceSplit = dummyText.split('.');
console.log(sentenceSplit);
console.log("space split: ",dummyText.split(' '));
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

let getSubstrings = ganlyric.substring(5,10);
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
console.log(Math.random()*1000);

let ceilNumber = 5.34;
console.log("ceil: ",Math.ceil(ceilNumber));


let floorNumber = 4.809;
console.log("floor: ",Math.floor(floorNumber));


let negativeVlue = -4;
console.log("make positive: ", Math.abs(negativeVlue));
