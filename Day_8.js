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

