// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) {
//             nextColorChange();
//         }
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });




// function saveToDb(data, sucess, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         sucess(data);
//     }
//     else {
//         failure();
//     }
// }

// saveToDb("Apna College", 
//     (data) => {
//         console.log("sucess: your data is saved...", data);
//         saveToDb("Hello World", 
//             (data) => {
//                 console.log("sucess2: your data is saved...", data);
//                 saveToDb("Aditya Singh", 
//                     (data) => {
//                         console.log("sucess3: your data is saved...", data);
//                     },
//                     () => {
//                         console.log("failure3: weak connection...your data is not saved!");
//                     }
//                 )
//             },
//             () => {
//                 console.log("failure2: weak connection...your data is not saved!");
//             }
//         )
//     },
//     () => {
//         console.log("failrue: weak connection...your data is not saved!");
//     }
// );


function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("Sucess: data is saved");
        }
        else {
            reject("Failure: weak connection");
        }
    });
}

// console.log(saveToDb("Hello"));

let request = saveToDb("hello world")
request.then(() => {
    console.log("promise is resolved");
    console.log(request);
})
.catch(() => {
    console.log("promise is rejected");
    console.log(request);   
});