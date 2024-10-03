let url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: {Accept: "application/json"}};
        // let request = await axios.get(url);
        let request = await axios.get(url, config);
        console.log(request);
        console.log(request.data);
    }
    catch(error)  {
        console.log("Error occured:", error);
        return "No data found!";
    }
}

getJokes();