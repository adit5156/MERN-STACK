const sum = (a,b) => {
    return a + b;
}
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a * b;
}
const divide = (a,b) => {
    return a / b;
}
const g = 9.8;
const PI = 3.14;

// module.exports = "Hello";

// let obj = {
//     sum: sum,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     g: g,
//     PI: PI
// }
// module.exports = obj;

module.exports = {
    sum: sum,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    g: g,
    PI: PI
}