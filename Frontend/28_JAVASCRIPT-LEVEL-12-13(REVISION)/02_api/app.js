// let apiData = '{"fact":"Florence Nightingale owned more than 60 cats in her lifetime.","length":61}';

// let jsObject = JSON.parse(apiData);
// console.log("JS Object =", jsObject);

// let jsonData = JSON.stringify(jsObject);
// console.log("JSON Data =",jsonData);


let url = "https://catfact.ninja/fact";


// Using Promises

// fetch(url)
// .then((request) => {
//     return request.json();
// })
// .then((data) => {
//     console.log(data);
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((request2) => {
//     return request2.json();
// })
// .then((data2) => {
//     console.log(data2);
//     console.log(data2.fact);
//     return fetch(url);
// })
// .then((request3) => {
//     return request3.json();
// })
// .then((data3) => {
//     console.log(data3);
//     console.log(data3.fact);
// })
// .catch((error) => {
//     console.log(`No Facts Found ${error}`);
// });


// Using Async Await

// async function getData1() {
//     try {
//         let request = await fetch(url);
//         let data = await request.json();
//         console.log(data);
//         console.log(data.fact);
//     }
//     catch(error) {
//         console.log(`No Fact Found ${error}`);
//     }
// }

// getData1();
// getData1();
// getData1();



// Using Async Await with Axios

// async function getData2() {
//     let request = await axios.get(url);
//     console.log(request);
//     console.log(request.data);
//     console.log(request.data.fact);
// }

// getData2();
// getData2();
// getData2();



// Using Async Await with Axios and Sending Request Headers with API Request

async function getData3(url) {
    const config = { headers: {Accept: "application/json"}};
    let request = await axios.get(url, config);
    console.log(request);
    console.log(request.data);
    console.log(request.data.joke);
}

getData3("https://icanhazdadjoke.com/");
getData3("https://icanhazdadjoke.com/");
getData3("https://icanhazdadjoke.com/");