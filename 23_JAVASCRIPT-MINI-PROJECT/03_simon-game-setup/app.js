let h2 = document.querySelector("h2");

let gameSeq = [];
let userSeq = [];
let colors = ["red", "yellow", "green", "purple"];

let gameStarted = false;
let level = 0;

document.addEventListener("keypress", function() {
    if(gameStarted == false) {
        console.log("Game has been started");
        gameStarted = true;

        levelUp();
    }
});

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    let randomNum = Math.floor(Math.random() * 4);
    let randomColor = colors[randomNum];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 200);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function btnPress() {
    let btn = this;
    console.log(btn);
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
}