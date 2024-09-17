let nums = [1, 2, 3, 4, 5, 6, 7, 8];

let sumOfNums = nums.reduce((accumulator, element) => {
    console.log(accumulator, element);
    return accumulator + element;
}, 0);
console.log(sumOfNums);