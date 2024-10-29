let url = "https://dog.ceo/api/breeds/image/random";

let img = document.querySelector("img");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let link = await getDogImages();
    // console.log(link);
    img.src = link;
})

async function getDogImages() {
    try {
        let request = await axios.get(url);
        return request.data.message;
    }
    catch(error) {
        return `No Dog Images Found`;
    }
}