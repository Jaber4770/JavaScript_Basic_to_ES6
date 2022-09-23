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
