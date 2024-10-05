// let h1 = document.querySelector("h1");

// function colorChange(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         console.log(`Color has been changed to ${color}`);
//         if(nextColorChange) {
//             nextColorChange();
//         }
//     }, 1000);
    
// }


// Callback Hell / Callback Nesting
// colorChange("red", 1000, () => {
//     colorChange("green", 1000, () => {
//         colorChange("blue", 1000);
//     });
// });


// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         success(data);
//     }
//     else {
//         failure();
//     }
// }


// Callback Hell / Callback Nesting
// saveToDb("Apple India", 
//     (result) => {
//         console.log("Success1: Data is saved i.e.", result);
//         saveToDb("HP India",
//             (result) => {
//                 console.log("Success2: Data is saved i.e.", result);
//                 saveToDb("Lenovo India",
//                     (result) => {
//                         console.log("Success3: Data is saved i.e.", result);
//                         saveToDb("Dell India", 
//                             (result) => {
//                                 console.log("Success4: Data is saved i.e.", result);
//                             }),
//                             () => {
//                                 console.log("Failure: Weak Connection. Data not saved");
//                             }
//                     },
//                     () => {
//                         console.log("Failure: Weak Connection. Data not saved");
//                     }
//                 )
//             },
//             () => {
//                 console.log("Failure: Weak Connection. Data not saved");
//             }
//         )
//     }),
//     () => {
//         console.log("Failure: Weak Connection. Data not saved");
//     }


// Promise Creation
// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve(data);
//         }
//         else {
//             reject(data);
//         }
//     });
// }

// Promise Consumption
// saveToDb("Apple India")
// .then((result) => {
//     console.log("Success1: Data is saved i.e.", result);
//     return saveToDb("HP India");
// })
// .then((result) => {
//     console.log("Success2: Data is saved i.e.", result);
//     return saveToDb("Lenovo India")
// })
// .then((result) => {
//     console.log("Success3: Data is saved i.e.", result);
//     return saveToDb("Dell India");
// })
// .then((result) => {
//     console.log("Success4: Data is saved i.e.", result);
//     return saveToDb("Acer India");
// })
// .then((result) => {
//     console.log("Success5: Data is saved i.e.", result);
// })
// .catch((error) => {
//     console.log("Failure: Weak Connection. Data not saved i.e.", error);
// });


// let h1 = document.querySelector("h1");


// Promise Creation
// function colorChange(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve(color);
//         }, delay);
//     });
// };


// Promise Consumption
// colorChange("red", 1000)
// .then((result) => {
//     console.log(`Color has been changed to ${result}`);
//     return colorChange("green", 1000);
// })
// .then((result) => {
//     console.log(`Color has been changed to ${result}`);
//     return colorChange("blue", 1000);
// })
// .then((result) => {
//     console.log(`Color has been changed to ${result}`);
// })
// .catch((error) => {
//     console.log("Promise is rejected", error);
// });