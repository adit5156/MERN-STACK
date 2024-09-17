let nums = [2, 4, 6];
let isEven = nums.every((element) => {
    return (element % 2 == 0);
});
console.log(isEven);

nums = [1, 3, 5, 7];
let isOdd = nums.every((element) => {
    return (!(element % 2 == 0));
});
console.log(isOdd);

nums = [2, 4, 6, 9, 10];
isEven = nums.every((element) => {
    return (element % 2 == 0);
});
console.log(isEven);