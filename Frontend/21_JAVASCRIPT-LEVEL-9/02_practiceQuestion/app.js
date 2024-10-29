let para = document.createElement("p");
para.innerText = "Hey I'm red!";
para.classList.add("red");
let body = document.querySelector("body");
body.appendChild(para);

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.classList.add("blue");
body.appendChild(h3);

let div = document.createElement("div");
div.classList.add("box");
body.appendChild(div);

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
div.prepend(h1);

let para2 = document.createElement("p");
para2.innerText = "ME TOO!";
div.append(para2);