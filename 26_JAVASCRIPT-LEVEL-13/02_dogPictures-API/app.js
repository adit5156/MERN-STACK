let url = "https://dog.ceo/api/breeds/image/random";

let h1 = document.querySelector("h1");
let img = document.querySelector("img");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let dogImg = await getImg();
    img.setAttribute('src', dogImg);
});

async function getImg() {
    try {
        let request = await axios.get(url);
        console.log(request);
        console.log(request.data);
        console.log(request.data.message);
        return (request.data.message);
    }
    catch(error) {
        console.log("Error occured:", error);
        return "No image found!";
    }
}