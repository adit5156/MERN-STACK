let nums = [2, 4, 6, 8, 9, 11];

let isEven = nums.some((element) => {
    return (element % 2 == 0);
});
console.log(isEven);

let isOdd = nums.some((element) => {
    return (!(element % 2 == 0));
});
console.log(isOdd);