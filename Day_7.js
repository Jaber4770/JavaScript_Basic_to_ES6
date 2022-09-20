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


