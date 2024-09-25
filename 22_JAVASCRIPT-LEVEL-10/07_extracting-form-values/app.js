let form = document.querySelector("form");
let user = document.querySelector("#username");
let pass = document.querySelector("#password");

// form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi, ${user.value} your password is ${pass.value}`);
// });

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let user = this.elements[0];
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi, ${user.value} your password is ${pass.value}`);

});