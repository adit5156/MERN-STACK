let inp = document.querySelector("input");
let btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//     console.log(e);
// });

// btn.addEventListener("dblclick", (e) => {
//     console.log(e);
// });

// inp.addEventListener("keydown", (e) => {
//     console.log(e);
//     console.log("key = ", e.key);
//     console.log("code = ", e.code);
// });

// inp.addEventListener("keydown", (e) => {
//     if(e.code === "ArrowUp") {
//         console.log("Character moves forward");
//     }
//     else if(e.code === "ArrowDown") {
//         console.log("Character moves backward");
//     }
//     else if(e.code === "ArrowLeft") {
//         console.log("Character moves left");
//     }
//     else if(e.code === "ArrowRight") {
//         console.log("Character moves right");
//     }
// });

inp.addEventListener("keydown", (e) => {
    if(e.code === "KeyU") {
        console.log("Character moves forward");
    }
    else if(e.code === "KeyD") {
        console.log("Character moves backward");
    }
    else if(e.code === "KeyL") {
        console.log("Character moves left");
    }
    else if(e.code === "KeyR") {
        console.log("Character moves right");
    }
});