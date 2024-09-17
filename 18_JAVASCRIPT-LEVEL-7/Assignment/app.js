let arrayAverage = (arr) => {
    let avg = 0;
    for(let num of arr) {
        avg += num;
    }

    avg = (avg) / arr.length;
    return `The average is = ${avg}`;
}

let result = arrayAverage([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
console.log(result);


let isEven = (n) => {
    if(n % 2 == 0) {
        return `${n} is an Even Number`;
    }
    else {
        return `${n} is an Odd Number`;
    }
};
result = isEven(10);
console.log(result);