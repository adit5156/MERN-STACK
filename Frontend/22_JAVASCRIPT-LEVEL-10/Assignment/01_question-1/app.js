let body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerText = "Click Me";
body.append(btn);


btn.addEventListener("click", function() {
    this.style.backgroundColor = "green"; 
});