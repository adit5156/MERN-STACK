let form = document.querySelector("form");
let input = document.querySelector("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value);
    console.log("Form data has been saved");
});