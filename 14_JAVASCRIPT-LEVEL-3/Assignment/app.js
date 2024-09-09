// Q1

let arr = [7, 9, 0, -2];
console.log(arr.slice(0, 3));

// Q2

let arr2 = [7, 9, 0, -2];
console.log(arr2.slice(-3));

// Q3

let str = "";
if(str.length === 0 || str === " ") {
    console.log("String is Blank!");
}
else {
    console.log("String is not blank");
}

// Q4

let str2 = "AdityaSingh";
let indx = 5;

if(str2[indx] === str2[indx].toLowerCase()) {
    console.log("character is lowercase");
}
else {
    console.log("character is uppercase");
}

// Q5

let str3 = "            Lenovo          ";
console.log(str3.trim());

// Q6

let arr3 = [];
if(arr3.length === 0) {
    console.log("Array is empty");
}
else {
    console.log("Array is not empty")
}