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