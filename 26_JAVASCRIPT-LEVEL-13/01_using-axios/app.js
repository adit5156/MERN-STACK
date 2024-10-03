let url = "https://catfact.ninja/fact";

let p = document.querySelector("#result");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    p.innerText = fact;
})

async function getFacts() {
    try {
        let request = await axios.get(url);
        console.log(request);
        console.log(request.data);
        console.log(request.data.fact);
        return (request.data.fact);
    }
    catch(error) {
        console.log("Error Occured:", error);
        return "No Fact Found";
    }   
}