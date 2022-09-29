let bolen = true;
let nuber = 4;

let text = 'hello world';
const pieValue = 3.1416;
text = "hello javaScript";
console.log(text);
/* 

৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।

*/


let value1 = 4;
let value2 = 4;
let totalValue = value1 + value2;
console.log("total value: ", totalValue);
let multiplication = value1 * totalValue;
console.log("multiplication: ", multiplication);
let divided = totalValue / multiplication;
console.log("divided", divided);
let abstraction = value1 - value2;
let remainder = multiplication % divided;
console.log("remainder: ", remainder);




/* 

৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 

 */


let comparisonNumber1 = 5;
let comparisonNumber2 = 6;

console.log(comparisonNumber1 === comparisonNumber2);
console.log(comparisonNumber1 > comparisonNumber2);
console.log(comparisonNumber1 < comparisonNumber2);
console.log(comparisonNumber1 >= comparisonNumber2);
console.log(comparisonNumber1 <= comparisonNumber2);
console.log(comparisonNumber1 != comparisonNumber2);


/*

 ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

 */

let job = true;
let salary = 50000;
let car = true;

if ((job === true) && (car === true)) {
    console.log("you can now marriage");
}
else if (job === true || salary > 60000) {
    console.log("you can now take a tour");
}
else {
    console.log("go to home");
}


/* 
 
৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

*/


if (5 > 6) {
    console.log("true");
}
else {
    console.log("false");
}


/* 

৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

*/

let number = 7;
while (number <= 19) {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
}


/* 

৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

*/


let arr = [23, 34, 45, 56, 67, 78, 89, 65, 54, 343, 32, 31, 21, 1];

console.log(arr.length);
arr[4] = 555;
console.log(arr);

arr.push(111);
arr.push(222);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(233);
console.log(arr);


/* 

৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

*/



let arry = [254, 345, 455, 546, 45, 75, 85, 545, 57, 6, 5, 5, 454, 5, 43, 324, 324, 234, 3, 4, 234, 23, 5, 46, 546];

for (let i = 0; i < arry.length; i++) {
    console.log(arry[i]);
}




/* 

১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

*/

let numbers = [254, 345, 455, 546, 45, 75, 85, 545, 57, 6, 5, 5, 454, 5, 43, 324, 324, 234, 3, 4, 234, 23, 5, 46, 546];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 80) {
        console.log("bigger than 80: ", numbers[i]);
    }
}


/* 

১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

*/


function multiplicationNum(num1, num2, num3) {
    let total = num1 * num2 * num3;
    return total;
}

let getMultiplication = multiplicationNum(2, 3, 4);
console.log(getMultiplication);



/* 

১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

*/


let object = {
    name: "rog",
    price: 20000,
    color: "black"
}

object.name = "samsung";
console.log(object);



/* 

প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 

৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 
প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি 
লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

*/

function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    let totalPageFirstBook = firstBookCopy * firstBookPage;
    let totalPageSecondBook = secondBookCopy * secondBookPage;
    let totalPageThirdBook = thirdBookPage * thirdBookCopy;

    let totalPage = totalPageFirstBook + totalPageSecondBook + totalPageThirdBook;

    return totalPage;
}


let firstBookCopy = 50;
let secondBookCopy = 30;
let thirdBookCopy = 20;
let getTotalPageResult = paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy);
console.log(getTotalPageResult);






/* ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।  */


function feetToInch(feet) {
    let inch = feet / 12;
    return inch;
}

let getInch = feetToInch(234);
console.log("your converted result is: ", getInch);




/* 
৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 
*/


let arrayNumbers = [254, 345, 455, 546, 45, 75, 85, 545, -57, 6, 5, 5, 454, -5, 43, -324, 324, -234, -3, 4, 234, 23, -5, 46, -546];

function positiveNumber(arrayNumbers) {
    let newArray = [];
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] >= 0) {
            newArray.push(arrayNumbers[i]);
        }
        else if (arrayNumbers[i] < 0) {
            break;
        }
    }
    return newArray;

}


let getPositiveNumber = positiveNumber(arrayNumbers);
console.log("positive numbers are: ", getPositiveNumber);




/* ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */

function bestFriend(namesArray) {
    let largeName = "";
    for (let i = 0; i < namesArray.length; i++) {
        let name = namesArray[i];
        if (name.length > largeName.length ) {
            largeName = name;
        }
    }
    return largeName;
    ;
}

let friendsNames = ['rifat', 'shawon', 'mithu'];
let getLargeName = bestFriend(friendsNames);
console.log("large name: ", getLargeName);



/* ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।  */


function centimeterToMeter(centimeter) {
    let meter = centimeter / 100;
    return meter;
}

let getMeter = centimeterToMeter(344);
console.log(getMeter);