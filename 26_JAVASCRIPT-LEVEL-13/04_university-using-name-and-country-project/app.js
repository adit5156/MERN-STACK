let country = document.querySelector("#country");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");


btn.addEventListener("click", async () => {
    let url = `http://universities.hipolabs.com/search?name=${country.value}`;
    let unis = await getUni(url);
    ol.innerText = "";
    for(let uni of unis) {
        // console.log(`${uni.name}, ${uni.country}`);
        createLi(uni.name, uni.country);
    }
    country.value = "";
});

function createLi(uniName, uniCountry) {
    let li= document.createElement("li");
    li.innerText = uniName + ", " + uniCountry;
    ol.appendChild(li);
}

async function getUni(url) {
    try {
        let request = await axios.get(url);
        // console.log(request);
        // console.log(request.data);
        return request.data;
    }
    catch(error) {
        console.log("Error Occured:", error);
        return "No University Found!";
    }
}