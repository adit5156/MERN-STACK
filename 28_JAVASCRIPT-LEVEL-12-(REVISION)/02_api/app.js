// let json = '{"fact":"Florence Nightingale owned more than 60 cats in her lifetime.","length":61}';

// console.log(json);

// let jsObject = JSON.parse(json);
// console.log(jsObject);
// console.log(jsObject.fact);

// let jsonStr = JSON.stringify(jsObject);
// console.log(jsonStr);


let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((request) => {
//     return request.json();
// })
// .then((data) => {
//     console.log("Data1 =", data);
//     console.log("Data1.fact =", data.fact);
//     return fetch(url);
// })
// .then((request2) => {
//     return request2.json();
// })
// .then((data2) => {
//     console.log("Data2 =", data2);
//     console.log("Data2.fact =", data2.fact);
// })
// .catch((error) => {
//     console.log("Error Occured:", error);
// });


async function getData(url) {
    try {
        let request = await fetch(url);
        let data = await request.json();
        console.log(data);
        console.log(data.fact);

        let request2 = await fetch(url);
        let data2 = await request2.json();
        console.log(data2);
        console.log(data2.fact);
    }
    catch(error) {
        console.log("Error Occured:", error);
    }
}

getData(url);