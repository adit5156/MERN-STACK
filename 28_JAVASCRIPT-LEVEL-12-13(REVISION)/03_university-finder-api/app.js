let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

btn.addEventListener("click", async () => {
    let url = `http://universities.hipolabs.com/search?name=${inp.value}`;
    let responses = await getUni(url);
    inp.value = "";
    ol.innerText = "";
    for(let response of responses) {
        let uniName = response.name;
        let uniCountry = response.country;
        createElement(uniName, uniCountry);
    }
});

function createElement(uniName, uniCountry) {
    let listItem = document.createElement("li");
    listItem.innerText = `${uniName}, ${uniCountry}`;
    ol.appendChild(listItem);
}

async function getUni(url) {
    let request = await axios.get(url);
    return request.data;
}