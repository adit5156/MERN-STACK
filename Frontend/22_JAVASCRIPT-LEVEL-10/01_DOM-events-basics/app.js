// function greet() {
//     alert("Welcome to the page!");
// }


// let btn = document.querySelector("button");
// btn.onclick = alertMsg;
// function alertMsg() {
//     alert("Button is clicked");
// }

let btns = document.querySelectorAll("button");
for(let btn of btns) {
    // btn.onclick = alertMsg;
    // btn.onmouseenter = function() {
    //     alert("You entered a button");
    // }

    // btn.addEventListener("click", () => {
    //     alert("Hello!");
    // });

    // btn.addEventListener("click", () => {
    //     alert("Aditya Singh")
    // });

    btn.addEventListener("dblclick", () => {
        console.log("You double clicked me");
    });
}
function alertMsg() {
    alert("Post has been liked!");
}