// functions can be declared inside the variables called as function expressions

let sum = function(a, b) {
    return a + b;
}
console.log(sum(10, 101));


let hello = function() {
    console.log("Hello");
}
hello();

hello = function() {
    console.log("Namaste");
}
hello();