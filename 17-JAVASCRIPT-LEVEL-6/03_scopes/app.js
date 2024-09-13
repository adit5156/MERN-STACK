let sum = 55;   // global scope

function calcSum(a, b) {
    let sum = a + b;    // function local scope
    console.log(sum);
}

calcSum(19, 21);
console.log(sum);