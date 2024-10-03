let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((request) => {
//     console.log(request);
//     // console.log(request.json());
//     return request.json();
// })
// .then((data) => {
//     console.log(data);
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((request2) => {
//     console.log(request2);
//     return request2.json();
// })
// .then((data2) => {
//     console.log(data2);
//     console.log(data2.fact);
// })
// .catch((error) => {
//     console.log("Error Occured:", error);
// });

// console.log("I am Happy");

async function getFacts() {
    try {
        let request = await fetch(url);
        let data = await request.json();
        // console.log(data);
        console.log(data.fact);

        let request2 = await fetch(url);
        let data2 = await request2.json();
        console.log(data2.fact);
    }
    catch(error) {
        console.log("Error Occured:", error);
    }

    console.log("Byee Byee");
}

getFacts();