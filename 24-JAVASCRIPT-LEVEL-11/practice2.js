// let h1 = document.querySelector("h1");

// function colorChange(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) {
//             nextColorChange(color);
//         }
//     }, delay);
// }

// Callback Nesting / Callback Hell
// colorChange("red", 1000, (color) => {
//     console.log(`Color has been changed to ${color}`);
//     colorChange("green", 1000, (color) => {
//         console.log(`Color has been changed to ${color}`);
//         colorChange("blue", 1000, (color) => {
//             console.log(`Color has been changed to ${color}`);
//             colorChange("orange", 1000, (color) => {
//                 console.log(`Color has been changed to ${color}`);
//                 colorChange("hotpink", 1000, (color) => {
//                     console.log(`Color has been changed to ${color}`);
//                     colorChange("yellow", 1000, (color) => {
//                         console.log(`Color has been changed to ${color}`);
//                 });
//                 });
//             });
//         });
//     });
// });



// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         success(data);
//     }
//     else {
//         failure(data);
//     }
// }

// // Callback Nesting / Callback Hell
// saveToDb("Apple India",
//     (data) => {
//         console.log(`Success1: Data is saved i.e.`, data);
//         saveToDb("HP India",
//             (data) => {
//                 console.log(`Success2: Data is saved i.e.`, data);
//                 saveToDb("Lenovo India", 
//                     (data) => {
//                         console.log(`Success3: Data is saved i.e.`, data);
//                         saveToDb("Dell India",
//                             (data) => {
//                                 console.log(`Success4: Data is saved i.e.`, data);
//                                 saveToDb("Asus India",
//                                     (data) => {
//                                         console.log(`Success4: Data is saved i.e.`, data);
//                                     },
//                                     (data) => {
//                                         console.log(`Failure: Weak connection. Data not saved i.e.`, data);
//                                     }
//                                 )
//                             },
//                             (data) => {
//                                 console.log(`Failure: Weak connection. Data not saved i.e.`, data);
//                             }
//                         )
//                     },
//                     (data) => {
//                         console.log(`Failure: Weak connection. Data not saved i.e.`, data);
//                     }
//                 )
//             },
//             (data) => {
//                 console.log(`Failure: Weak connection. Data not saved i.e.`, data);
//             }
//         )
//     },
//     (data) => {
//         console.log(`Failure: Weak connection. Data not saved i.e.`, data);
//     }
// );



// Promises
// let h1 = document.querySelector("h1");

// function colorChange(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve(color);
//         }, delay);
//     });
// }

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
//     return colorChange("orange", 1000);
// })
// .then((result) => {
//     console.log(`Color has been changed to ${result}`);
//     return colorChange("hotpink", 1000);
// })
// .then((result) => {
//     console.log(`Color has been changed to ${result}`);
//     return colorChange("yellow", 1000);
// })
// .then((result) => {
//     console.log(`Color has been changed to ${result}`);
// })
// .catch((error) => {
//     console.log("Promise is rejected", error);
// });



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

// saveToDb("Apple India")
// .then((result) => {
//     console.log(`Success1: Data is saved i.e.`, result);
//     return saveToDb("HP India");
// })
// .then((result) => {
//     console.log(`Success2: Data is saved i.e.`, result);
//     return saveToDb("Lenovo India");
// })
// .then((result) => {
//     console.log(`Success3: Data is saved i.e.`, result);
//     return saveToDb("Dell India");
// })
// .then((result) => {
//     console.log(`Success4: Data is saved i.e.`, result);
//     return saveToDb("Asus India");
// })
// .then((result) => {
//     console.log(`Success5: Data is saved i.e.`, result);
// })
// .catch((error) => {
//     console.log("Failure: Weak connection. Data not saved i.e.", error);
// });

// let h1 = document.querySelector("h1");

// function colorChange(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let internetSpeed = Math.floor(Math.random() * 10) + 1;
//             if(internetSpeed > 3) {
//                 reject("Weak connection");
//             }
//             h1.style.color = color;
//             console.log(`Color has been changed to ${color}`);
//             resolve(color);
//         }, delay);
//     });
// }

// async function demo() {
//     try{
//         await colorChange("red",1000);
//         await colorChange("green", 1000);
//         await colorChange("blue", 1000);
//         await colorChange("orange", 1000);
//         await colorChange("hotpink", 1000);
//         await colorChange("yellow", 1000);
//     }
//     catch(error) {
//         console.log("Error 404", error);
//     }

//     let a = 5;
//     console.log(a);
//     console.log("New num =", a+3);
// }

// demo();


function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            console.log(`Success: Data is saved i.e. ${data}`);
            resolve(data);
        }
        else {
            console.log(`Failure: Weak connection. Data not saved i.e. ${data}`);
            reject(data);
        }
    });
}

async function demo() {
    try {
        await saveToDb("Apple India");
        await saveToDb("HP India");
        await saveToDb("Lenovo India");
        await saveToDb("Dell India");
        await saveToDb("Asus India");
    }
    catch(error) {
        
    }
}

demo();