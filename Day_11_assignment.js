/* 

Problem:1  radianToDegree
ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

 */
function radianToDegree(radian) {
    const pieValue = 3.1416;
    if (typeof radian === "number") {
        let degree = radian * 180 / pieValue;
        let twoDeciamlConverted = parseFloat(degree.toFixed(2));
        return twoDeciamlConverted;
    }
    else {
        return "Please input a number!"
    }
}

let radianValue = 546456;
let getDegreeResult = radianToDegree(radianValue);
console.log(getDegreeResult);





/* 
Problem:2  isJavaScriptFile 

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

 */

function isJavaScriptFile(fileExtention) {
    if (typeof fileExtention === "string") {
        if (fileExtention.endsWith('.js')) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Please input a string."
    }
}

let isJavaScript = isJavaScriptFile("app.js");
console.log(isJavaScript);





/* 
Problem 3: oilPrice
ফাংশন নেম দিতে হবে oilPrice এই ফাংশন তিনটা প্যারামিটার নিবে। 
ভিডিও ভালো করে দেখবে। 

প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

*/

function oilPrice(dieselLitre, petrolLitre, octaneLitre) {
    if (((typeof dieselLitre === "number") && (typeof petrolLitre === "number")) && (typeof octaneLitre === "number")) {
        const dieselPricePerLitre = 114;
        const petrolPricePerLitre = 130;
        const octanePricePerLitre = 135;

        let dieselTotalPrice = dieselPricePerLitre * dieselLitre;
        let petrolTotalPrice = petrolPricePerLitre * petrolLitre;
        let octaneTotalPrice = octanePricePerLitre * octaneLitre;

        let totalOilPrice = dieselTotalPrice + petrolTotalPrice + octaneTotalPrice;

        return totalOilPrice;
    }
    else {
        return "Please input number!";
    }
}

let getTotalPrice = oilPrice(1, 5, 3);
console.log(getTotalPrice);



/*  
Problem 4: publicBusFare

একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 
 */


function publicBusFare(totalPassenger) {
    const busPassenger = 50;
    const microBusPassenger = 11;
    const publicBusTicketPrice = 250;

    if(typeof totalPassenger === "number"){
        let passengerOnBus = totalPassenger % busPassenger;
        let remainingForPublicBus = passengerOnBus % microBusPassenger;
        let totalPublicBusFare = remainingForPublicBus * publicBusTicketPrice;
        return totalPublicBusFare;
    }
    else{
        return "Plese input a Number";
    }
}


let getPublicBusFare = publicBusFare(62);
console.log("Total Bus Fare: ", getPublicBusFare);
















/* 

Problem 5: isBestFriend

তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

{ name: "abul", friend: "babul" },
{ name: "babul", friend: "abul" }

{ name: "abul", friend: "kabul" },
{ name: "kabul", friend: "sabul" 

 */

function isBestFriend(friendName1, friendName2) {
    // from first object/perameter
    let name1 = friendName1.name;
    let friend1 = friendName1.friend;

    // from second object/perameter
    let name2 = friendName2.name;
    let friend2 = friendName2.friend;

    if (((typeof name1 === "string") && (typeof friend1 === "string")) && ((typeof name2 === "string") && (typeof friend2 === "string"))) {
        if ((name1 === friend2) && (friend1 === name2)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Please input string."
    }
}

let getfriend = isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abul" })
console.log("your friend is best friend: ", getfriend);