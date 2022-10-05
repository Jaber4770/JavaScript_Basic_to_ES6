// incremental__________________:
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);


// decremental_________________:
let sumDecremental = 0;
for (let i = 5; i >= 1; i--) {
    sumDecremental += i;
}
console.log(sumDecremental);


function sumFunction(i) {
    if (i === 1) {
        return 1;
    }
    return i + sumFunction(i - 1);
}

const sumResult = sumFunction(5);
console.log(sumResult);


// factorial____________:
let factorial = 1;
for (let i = 5; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);


function factoFunc(i) {
    if (i === 1) {
        return 1;
    }
    return i * factoFunc(i - 1);
}

let getFacto = factoFunc(4);
console.log("get Facto: ", getFacto);



let object = {
    name: "jaber ahmed",
    age: 20,
    job: false,
    frieds: ["rifat", "shawon", "mithu"],
    pc: {
        processor: "i5",
        ram: "8gb",
        ssd: true,
        hdd: "2tb",
        totalCost: {
            first_time: "6k",
            many_times: "3k",
            last_large: "30K"
        },
        who_help_me: ["saim bhai", "boro mama"]
    },
    frieds_dad: [
        {
            rifat: 'kibria sharkar',
            shawon: "dulal miah",
            mithu: "selim"
        },
        {
            cpu: "i5",
            core: '4',
            threts: 8
        }
    ]
        
}