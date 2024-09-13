function oddOrEvenFactory(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n % 2 == 0));
        }
    }
    else if(request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    }
}

let request = "odd";
let result = oddOrEvenFactory(request);
console.log(result);
console.log(result(1));
console.log(result(3));
console.log(result(5));
console.log(result(6));

request = "even";
let result2 = oddOrEvenFactory(request);
console.log(result2);
console.log(result2(2));
console.log(result2(4));
console.log(result2(6));
console.log(result2(7));