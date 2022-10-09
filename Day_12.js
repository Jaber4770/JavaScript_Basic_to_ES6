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
    act: function () {
        console.log("acting like shakib khan.")
    },
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

// how to call the function
let getObjectFunc = object.act();
console.log(getObjectFunc);


// new thing

// let products = [10,20,30];
const products = {
    '0': 10,
    '1': 20,
    '3': 30
}


// arguments: 


// argument only funciton er vitor kaj kore. ekta function e doita pera meter diye 5 ta vlaue send korle sodo 2 ta man e pawa jai but argument diye chaile sob gola value e pawa jai. eta ke bole array like object.

function arguFunc(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[2]);
}

arguFunc(2, 3);



// for loop and for of:
let numbers = [12, 23, 34, 45, 56, 67, 78, 87, 89, 90, 32];

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(number);
}

// slim version ________________for of_________________
for (const number of numbers) {
    console.log(number);
}



// for of_____________________for of_____________________for of_______________

let productsName = [
    { id: 1, name: "samsung phone", price: 2333 },
    { id: 2, name: "xiamoi phone", price: 4343 },
    { id: 3, name: "one plus phone", price: 2342 },
    { id: 4, name: "samsung laptop", price: 2333 },
    { id: 5, name: "xiamoi tab", price: 4343 },
    { id: 6, name: "dell laptop", price: 2342 }
];

for(let productName of productsName){
    console.log(productName);
}


function matchedProduct(productsName, search){
    let matchedProducts =[];
    for(product of productsName){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matchedProducts.push(product);
        }
    }
    return matchedProducts;
}

let getProduct = matchedProduct(productsName, 'PhoNe');
console.log(getProduct);
