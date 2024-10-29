// Q1. Multiple of 10

let arr1 = [10, 20, 30, 40, 50];

let multipleOf10 = arr1.every((element) => {
    return (element % 10 == 0);
});
console.log(multipleOf10);

// Q2. Maximum in Array 

function getMax(arr) {
    let max = arr.reduce((acc, element) => {
        if(acc < element) {
            return element;
        }
        else {
            return acc;
        }
    });
    console.log("The maximum value in the array = ", max);
}

let arr2 = [2, 10, 14, 3, 1, 7, 6, 31, 17];
getMax(arr2);


// Q3. Minimum in Array

function getMin(arr) {
    let min = arr.reduce((acc, element) => {
        if(acc < element) {
            return acc;
        }
        else {
            return element;
        }
    });
    console.log("The minimum value of the array = ", min);
}

let arr3 = [6, 9, 14, 3, 19, 24, 54];
getMin(arr3);