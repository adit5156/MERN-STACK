let arr1 = [10, 20, 30, 40, 50];

let isMultipleOf10 = arr1.every((element) => {
    return (element % 10 == 0);
});
console.log(isMultipleOf10);

function getMin(arr) {
    let min = arr.reduce((acc, element) => {
        if(acc < element) {
            return acc;
        }
        else {
            return element;
        }
    });

    console.log("Minimum value of the array = ", min);
}

let arr2 = [2, 4, 6, 8, 10, 12, 3];
getMin(arr2);


function getMax(arr) {
    let max = arr.reduce((acc, element) => {
        if(acc < element) {
            return element;
        }
        else {
            return acc;
        }
    });

    console.log("Maximum value of the array = " , max);
}

let arr3 = [2, 4, 6, 8, 10, 200, 190, 290];
getMax(arr3);