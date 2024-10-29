let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("keydown", function(e) {
    console.log(e);

    if((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode == 32)) {
            h2.innerText = inp.value;
    }
});