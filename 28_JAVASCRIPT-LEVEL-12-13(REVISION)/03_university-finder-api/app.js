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
        createLi(uniName, uniCountry);
    }
});

function createLi(uniName, uniCountry) {
    let li = document.createElement("li");
    li.innerText = `${uniName}, ${uniCountry}`;
    ol.appendChild(li);
}

async function getUni(url) {
    let request = await axios.get(url);
    return request.data;
}