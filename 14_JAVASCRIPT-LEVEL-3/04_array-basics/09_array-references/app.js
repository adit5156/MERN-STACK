// let arr = [1, 2, 3, 4];

// let newArr = [1, 2, 3, 4];

// console.log(arr == newArr);

// Both have different memory locations / addresses

let arr = [1, 2, 3];

let newArr = arr;

newArr.push(4);

console.log(newArr);
console.log(arr);

console.log(newArr == arr);
console.log(newArr === arr);

// Both here share the same memory location / address