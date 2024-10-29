let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];
let max = 0;

for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
        max = arr[i];
    }
}

console.log("Maximum number in the array = ", max);



max = arr.reduce((acc, element) => {
    if(acc < element) {
        return element;
    }
    else {
        return acc;
    }
});
console.log("Maximum number in the array = ", max);