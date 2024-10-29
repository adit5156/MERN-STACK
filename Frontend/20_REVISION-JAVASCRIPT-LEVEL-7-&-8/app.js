let arrayAverage = (arr) => {
    let sum = 0;
    for(let element of arr) {
        sum = sum + element;
    }
    let avg = (sum / arr.length).toFixed(1);
    console.log("Average = ", avg);
}

arrayAverage([2, 4, 7, 9, 11, 12, 14, 19, 23]);

let isEven = (n) => {
    if(n % 2 == 0) {
        return "Even Number";
    }
    else {
        return "Odd Number"
    }
}

let result = isEven(2);
console.log(result);
result = isEven(3);
console.log(result);


let object = {
    message: "Hello, World!",

    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);



let arr = [2, 4, 6, 10];
let arrOps = arr.map((element) => element * element).reduce((acc, element) => acc + element);

let arrAvg = arrOps / arr.length;
console.log("Average = ", arrAvg.toFixed(1));


let arr2 = [3, 6, 9, 12, 15, 18];
let arrPlus5 = arr2.map((element) => element + 5);
console.log(arrPlus5);


let arr3 = ["a", "d", "i", "t", "y", "a"];
let arrUpper = arr3.map((element) => element.toUpperCase());
console.log(arrUpper);


function doubleAndReturnArgs(arr, ...args) {
    let double = args.map((element) => element * 2);
    let newArr = [...arr, ...double];
    return newArr;
}
let arr4 = [5, 10, 15, 20, 25, 30];
let result2 = doubleAndReturnArgs(arr4, 2, 7, 14, 21, 9, 1, 13);
console.log(result2);


let mergedObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergedObjects({"a": 1, "b": 2}, {"c": 3, "d": 4}));