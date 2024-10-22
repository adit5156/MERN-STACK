const inp = document.querySelector("input");
const btn = document.querySelector("button");
const ol = document.querySelector("ol");

btn.addEventListener("click", async () => {
    let url = `http://universities.hipolabs.com/search?name=${inp.value}`;
    let responses = await getUni(url);
    inp.value = "";
    ol.innerText = "";
    for(let response of responses) {
        let uniName = response.name;
        let uniCountry = response.country;
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
        console.log("Error: 404", error);
    }
}