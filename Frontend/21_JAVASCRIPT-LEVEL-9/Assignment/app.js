let inp1 = document.createElement("input");
let btn1 = document.createElement("button");
let h1 = document.createElement("h1");
let p1 = document.createElement("p");
let body = document.querySelector("body");
btn1.innerText = "Click me";

inp1.setAttribute("placeholder", "username");
btn1.setAttribute("id", "btn");

body.append(inp1);
body.append(btn1);

document.querySelector("#btn").classList.add("blueBg", "white");

h1.innerText = "DOM Practice";
h1.innerHTML = `<u>${h1.innerText}</u>`;
h1.classList.add("purple");

body.append(h1);

p1.innerHTML = `Apna College <strong>Delta</strong> Practice`;

body.append(p1);