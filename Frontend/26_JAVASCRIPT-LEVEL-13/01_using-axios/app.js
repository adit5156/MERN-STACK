let url = "https://catfact.ninja/fact";

let p = document.querySelector("#result");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFact();
    // console.log(fact);
    p.innerText = fact;
});


async function getFact() {
    try {
        let request = await axios.get(url);
        return request.data.fact;
    }
    catch(error) {
        return `No Fact Found`;
    }
}