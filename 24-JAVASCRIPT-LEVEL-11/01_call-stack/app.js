function hello() {
    console.log("inside hello func");
    console.log("Hello World!");
}

function demo() {
    console.log("inside demo func..calling hello func");
    hello();
}

console.log("Calling demo func");
demo();
console.log("Done, Byee!");