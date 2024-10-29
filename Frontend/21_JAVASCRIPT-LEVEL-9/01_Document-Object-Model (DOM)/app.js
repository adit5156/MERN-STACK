// let smallImages = document.getElementsByClassName("oldImg");

// for(let smallImage of smallImages) {
//     smallImage.src = "assets/spiderman_img.png";
//     console.log(smallImage.src);
// }

let query = document.querySelector('h1');
console.log(query);
console.log(query.textContent);

query = document.querySelector('#description');
console.log(query);

query = document.querySelector('.oldImg');
console.log(query);

query = document.querySelector('.box a');
console.log(query);

let queryAll = document.querySelectorAll('p');
console.log(queryAll);

queryAll = document.querySelectorAll('.box a');
console.log(queryAll);


let heading = document.querySelector('h1');
heading.innerHTML = `<u>${heading.innerText}</u>`;

let boldFirstLink = document.querySelector('.box a');
boldFirstLink.innerHTML = `<strong>${boldFirstLink.innerText}</strong>`;



let img = document.querySelector('#mainImg');

// heading.style.color = "red";
// heading.style.backgroundColor = "aqua";

let allLinks = document.querySelectorAll('.box a');
for(let link of allLinks) {
    link.style.color = "purple";
}

let box = document.querySelector('.box');
console.dir(box.style);


console.log(img.classList);



// heading.classList.add("green", "underline");
// console.log(heading.classList);
heading.classList.toggle("green");
heading.classList.toggle("underline");


box.classList.add("yellowBg");



let h4 = document.querySelector('h4');
console.log(h4.parentElement);

console.log(box.children);

let ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.children);


// Navigation

// 1) parentElement
// 2) children => childElementCount
// 3) previousElementSibling / nextElementSibling


// Creating an Element

let btn = document.createElement('button');
btn.innerText = "Click Me!";

let newPara = document.createElement('p');
newPara.innerText = "Hi, this is my new para";
newPara.append(". This is a new text using append");
newPara.append(btn);
newPara.append(" Do not click this button");

// box.appendChild(newPara);
box.prepend(newPara);

// box.appendChild(btn);

let newBtn = document.createElement("button");
newBtn.innerText = "NEW BUTTON!!!";

let firstPara = document.querySelector("p");

// firstPara.insertAdjacentElement("beforebegin", newBtn);
// firstPara.insertAdjacentElement("afterbegin", newBtn);
// firstPara.insertAdjacentElement("beforeend", newBtn);
firstPara.insertAdjacentElement("afterend", newBtn);

let body = document.querySelector("body");

// body.removeChild(newBtn);
newBtn.remove();
firstPara.remove();