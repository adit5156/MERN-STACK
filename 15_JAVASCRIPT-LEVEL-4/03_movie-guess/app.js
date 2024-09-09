let guessMovie = prompt("Enter your guess for the movie");
let favMovie = "Avatar";

while(guessMovie !== favMovie) {
    if(guessMovie === "quit") {
        alert("You quited!");
        break;
    }
    alert("Wrong Guess!");
    guessMovie = prompt("Enter another guess");
}

if(guessMovie === favMovie) {
    alert("Congratulations. You have guessed the right movie!");
}