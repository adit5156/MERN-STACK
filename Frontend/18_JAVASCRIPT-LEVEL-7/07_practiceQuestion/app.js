// Q1

// let square = (n) => {
//     return n ** 2;
// }

let square = (n) => (n ** 2);
let result = square(4);
console.log(result);


// Q2

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);