let user = Number(prompt("Enter a number"));
let randomNumber = Math.floor(Math.random() * user) + 1;
console.log(randomNumber);
let guessNumber = prompt("Guess the correct number");

while (guessNumber != randomNumber) {
    if(guessNumber == "quit") {
        console.log("Quitting...")
        break;
    }

    if(guessNumber < randomNumber) {
        guessNumber = prompt("Your guess was too small. Please try again.");
    }
    else {
        guessNumber = prompt("Your guess was too large. Please try again.");
    }
}

if(guessNumber == randomNumber) {
    alert("Congratulations! You guessed the number right.");
}