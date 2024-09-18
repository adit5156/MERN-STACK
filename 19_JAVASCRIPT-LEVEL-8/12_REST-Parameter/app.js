function sum(...args) {
    let sum = args.reduce((acc, element) => {
        return acc + element;
    });
    console.log(sum);
}

sum(1, 2, 3, 4, 5);


function getMin(msg,...args) {
    console.log(msg);
    let min = args.reduce((acc, element) => {
        if(acc < element) {
            return acc;
        }
        else {
            return element;
        }
    });
    console.log(min);
}

getMin("Hiii there this function gets the minimum in the array!", 1, 2, 3, 4, 5);

function getMax(msg,...args) {
    console.log(msg);
    let max = args.reduce((acc, element) => {
        if(acc < element) {
            return element;
        }
        else {
            return acc;
        }
    });
    console.log(max);
}

getMax("Hiii there, this function gets the maximum in the array!", 1, 2, 3, 4, 5);