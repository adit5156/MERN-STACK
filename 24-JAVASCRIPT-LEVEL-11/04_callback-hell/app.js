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


// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve("Sucess: data is saved");
//         }
//         else {
//             reject("Failure: weak connection");
//         }
//     });
// }

// // console.log(saveToDb("Hello"));

// let request = saveToDb("hello world")
// request.then((result) => {
//     console.log("data1 saved. promise is resolved");
//     console.log(result);
//     // console.log(request);
//     return saveToDb("aditya singh");
// })
// .then((result)=> {
//     console.log("data2 saved. promise2 is resolved");
//     console.log(result);
//     return saveToDb("prakash singh");
// })
// .then((result) => {
//     console.log("data3 saved. promise3 is resolved");
//     console.log(result);
// })
// .catch((error) => {
//     console.log("some promise rejected");
//     console.log(error);
//     // console.log(request);
// });





let h1 = document.querySelector("h1");

function colorChange(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve(`Color of the text has been changed to ${color}`);
        }, delay);
    });
}

let request = colorChange("red", 1000);
request
.then((result) => {
    console.log("color has been changed");
    console.log("promiseResult: ",result);
    return colorChange("green", 1000);
})
.then((result) => {
    console.log("color has been changed");
    console.log("promiseResult: ",result);
    return colorChange("blue", 1000);
})
.then((result) => {
    console.log("color has been changed");
    console.log("promiseResult: ",result);
});