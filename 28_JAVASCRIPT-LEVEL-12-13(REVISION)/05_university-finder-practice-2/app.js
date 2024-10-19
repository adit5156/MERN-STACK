let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

btn.addEventListener("click", async function() {
    let url = `http://universities.hipolabs.com/search?name=${inp.value}`;
    let universities = await getUni(url);
    inp.value = "";
    ol.innerText = "";
    for(let university of universities) {
        let uniName = university.name;
        let uniCountry = university.country;
        await createElement(uniName, uniCountry);
    }
});

async function createElement(uniName, uniCountry) {
    let li = document.createElement("li");
    li.innerText = `${uniName}, ${uniCountry}`;
    ol.appendChild(li);
}

async function getUni(url) {
    let request = await axios.get(url);
    return request.data;
}