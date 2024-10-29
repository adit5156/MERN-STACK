let p = document.querySelector("p");
let div = document.querySelector("div");

p.addEventListener("click", () => {
    console.log("Paragraph got clicked");
});

div.addEventListener("click", () => {
    div.style.backgroundColor = "green";
    console.log("Color Changed!");
});