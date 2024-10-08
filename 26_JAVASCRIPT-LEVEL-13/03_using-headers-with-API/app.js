let url = "https://icanhazdadjoke.com/";

async function getData() {
    try {
        const config = { headers: {Accept: "application/json"}};
        let request = await axios.get(url, config);
        console.log(request);
        console.log(request.data);
        console.log(request.data.joke);
    }
    catch(error) {
        console.log("No data found!");
    }
}

getData();