let btn = document.querySelector("button");
let colorDiv = document.querySelector(".colorDiv");
let h1 = document.querySelector("h1");


btn.addEventListener("click", () => {
    let randomColor = getRandomColor();

    colorDiv.style.backgroundColor = randomColor;
    h1.innerText = `${randomColor}`;
});

function getRandomColor() {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}