// Change and Input Events

let inp = document.querySelector("input");
let p = document.querySelector("p");


// Change Event
// inp.addEventListener("change", function() {
//     let inpValue = this.value;
//     p.innerText = inpValue;
// });


// Input Event

inp.addEventListener("input", function() {
    let inpValue = this.value;
    p.innerText = inpValue;
});