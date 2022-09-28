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

for(let i = 0; i<arry.length; i++){
    console.log(arry[i]);
}




/* 

১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

*/

let numbers = [254, 345, 455, 546, 45, 75, 85, 545, 57, 6, 5, 5, 454, 5, 43, 324, 324, 234, 3, 4, 234, 23, 5, 46, 546];

for(let i = 0; i<numbers.length; i++){
    if(numbers[i] > 80){
        console.log("bigger than 80: ",numbers[i]);
    }
}


/* 

১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

*/


function multiplicationNum(num1, num2, num3){
    let total = num1 * num2 * num3;
    return total;
}

let getMultiplication = multiplicationNum(2,3,4);
console.log(getMultiplication);



/* 

১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

*/