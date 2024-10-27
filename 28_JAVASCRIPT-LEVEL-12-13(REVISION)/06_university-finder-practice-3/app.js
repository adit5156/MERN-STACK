let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

btn.addEventListener("click", async () => {
    let url = `http://universities.hipolabs.com/search?name=${inp.value}`;
    let universities = await getUni(url);
    inp.value = "";
    ol.innerHTML = "";
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
    try {
        let request = await axios.get(url);
        return request.data;
    }
    catch(error) {
        console.log("No Universities Found", error);
    }
}