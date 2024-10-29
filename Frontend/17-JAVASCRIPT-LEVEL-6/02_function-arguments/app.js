// values passed to the parameters are the arguments

function printName(name) {
    console.log(name);
}

// printName("Aditya");
// printName("Lenovo");
// printName("ApnaCollege");

function printInfo(name, age) {
    console.log(`${name}'s age is: ${age}.`);
}

// printInfo("Shradha", 20);
// printInfo("Yash", 26);

function sum(a, b) {
    console.log(`Sum = ${a+b}`);
}
// sum(10, 19);

function avgNumber(num1, num2, num3) {
    let avg = (num1 + num2 + num3) / 3;
    console.log(`Average = ${avg}`);
}
// avgNumber(1000, 1999, 2001);

function printTable(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
// printTable(5);
// printTable(73);

function sum2(a, b) {
    return a + b;
}
// let result = sum2(2, 6);
// console.log(result);
// console.log(sum2(sum2(2, 3), 6));

function print1ton(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// console.log(print1ton(10));

function returnString(arr) {
    let str = "";
    for(let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    console.log(str);
    return str;
}

console.log(returnString(["aditya", "shradha", "arnab"]));