// let arr = [1, 2, 3, 4, 5, 6, 7, 10, 1, 2 , 3, 10, 0, 19, 30, 29, 67, 100];

// console.log(Math.min(arr));
// console.log(Math.min(...arr));

// arr.push(-1);
// console.log(Math.min(...arr));

// console.log(arr);
// console.log(...arr);

// let name = "ApnaCollege";
// console.log(name);
// console.log(...name);

let arr = [1, 2, 3, 4, 5];

let newArr = [...arr];

console.log(arr);
console.log(newArr);

newArr.push(6);
console.log(newArr);


let chars = [..."HelloWorld"];
console.log(chars);


let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let nums = [...odd, ...even];
console.log(nums);