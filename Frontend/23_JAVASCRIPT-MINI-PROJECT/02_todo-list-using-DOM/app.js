let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete Task";

    ol.appendChild(item);
    item.append(" ", deleteBtn);

    inp.value = "";
});

ol.addEventListener("click", function(e) {
    if(e.target.nodeName == "BUTTON") {
        let parentElement = e.target.parentElement;
        parentElement.remove();
        console.log("Element Deleted!");
    }
});