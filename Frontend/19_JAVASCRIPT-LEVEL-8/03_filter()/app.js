let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9, 10, 11, 12];

let evenNums = nums.filter((element) => {
    return (element % 2) == 0;
});
console.log(evenNums);

let oddNums = nums.filter((element) => {
    return (!((element % 2) == 0));
});
console.log(oddNums);

let lessThan5 = nums.filter((element) => {
    return element < 5;
});
console.log(lessThan5);