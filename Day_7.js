// problem solving day________________________:



// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

function celciusToFarenheight(celcicus) {

    if (celcicus !== 0) {
        let getFarenheight = celcicus * (9/5) + 32;
        return getFarenheight;
    }
    else{
        return 32;
    }
}

let celcicus = 33;
let getFarenheightResult = celciusToFarenheight(celcicus);
console.log(getFarenheightResult, "Degree Farenheit");


// farenheit to celcius______________________________________:
// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
// formula is: 	(32°F − 32) × 5/9 = 0°C
	

function getCelcius(farenheit){
    let celcius = (farenheit -32)* (5/9);
    return celcius;
}

let farenheit = 100;
let getCelciusResult = getCelcius(farenheit);
console.log(getCelciusResult);



// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

function grade(marks){
    if( marks <= 100 && marks >= 0){
        if(marks >=80){
            return (marks, "your grade is A+");
        }
        else if( marks >= 70){
            return (marks, "your grade is A");
        }
        else if(marks>= 60){
            return (marks, "your grade is A-");
        }
        else if(marks >= 50){
            return (marks, "your grade is B");
        }
        else if(marks >= 40){
            return (marks, "your grade is B-");
        }
        else if(marks >= 33){
            return (marks, "your grade is C");
        }
        else{
            return (marks, "your grade is F");
        }
    }
    else{
        console.log("your marks is invalid.");
    }
}


let marks = 100;
let getGradePoint = grade(marks);
console.log(getGradePoint);


// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

// The formula is I = Pnr;


function interest(timeInYear, principleAmount, rate){
    let getInterest = timeInYear * principleAmount * rate;
    return getInterest;
}

let timeInYear = 4;
let principleAmount = 2000000;
let rate = 5;
let getInterestMoney = interest(timeInYear, principleAmount, rate);
console.log("your interest is: ",getInterestMoney);





