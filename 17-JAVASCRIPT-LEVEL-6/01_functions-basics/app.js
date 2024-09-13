function hello() {
    console.log("Hello!");
}

// hello();

function printName() {
    console.log("Aditya Singh");
    console.log("Apna College");
}
// printName();

function print1to5() {
    for(let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
// print1to5();

function isAdult(age) {
    if(age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not an Adult");
    }
}
// isAdult(18);

function printPoem() {
    console.log("Twinkle twinkle, little star");
    console.log("How i wonder what you are");
}
// printPoem();

function rollADice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}
rollADice();