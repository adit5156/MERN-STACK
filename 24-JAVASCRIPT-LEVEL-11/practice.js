// function hello() {
//     console.log("inside hello fnx");
//     console.log("Hello");
// }

// function demo() {
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fnx");
// demo();
// console.log("done, byee byee");


// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// Synchronous Code
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);


// Asynchronous Code
// setTimeout(() => {
//     console.log("Hi there, I am an asynchronous code");
// }, 2000);
// console.log("Hello...");






// let h1 = document.querySelector("h1");
// function colorChange(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) {
//             nextColorChange();
//         }
//     }, delay);
// }

// colorChange("red", 1000, () => {
//     colorChange("orange", 1000, () => {
//         colorChange("green", 1000, () => {
//             colorChange("blue", 1000, () => {
//                 colorChange("hotpink", 1000, () => {
//                     colorChange("yellow", 1000);
//                 });
//             });
//         });
//     });
// });
// Callback Nesting / Callback Hell




// function saveToDb(data, sucess, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         sucess(data);
//     }
//     else {
//         failure(data);
//     }
// }

// saveToDb("hello aditya", 
//     (data) => {
//         console.log("Sucess: data has been saved. ", data);
//         saveToDb("welcome to apna college",
//             (data) => {
//                 console.log("Sucess2: data has been saved. ", data);
//                 saveToDb("Sigma 4.0", 
//                     (data) => {
//                         console.log("Sucess3: data has been saved. ", data);
//                     },
//                     (data) => {
//                         console.log("Failure: weak connection...data not saved. ", data);
//                     }
//                 )
//             },
//             (data) => {
//                 console.log("Failure: weak connection...data not saved. ", data);
//             }
//         )
//     },
//     (data) => {
//         console.log("Failure: weak connection...data not saved. ", data);
//     }
// );

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

// console.log(saveToDb("Aditya Singh"));

// let request = saveToDb("Apple India");
// request
// .then((result) => {
//     console.log("Data1 is saved i.e.", result);
//     return saveToDb("HP India");
// })
// .then((result) => {
//     console.log("Data2 is saved i.e.", result);
//     return saveToDb("Lenovo India");
// })
// .then((result) => {
//     console.log("Data3 is saved i.e.", result);
//     return saveToDb("Dell India");
// })
// .then((result) => {
//     console.log("Data4 is saved i.e.", result);
// })
// .catch((error) => {
//     console.log("Weak connection. Data not saved i.e.", error);
// });




let h1 = document.querySelector("h1");

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve(color);
        }, delay);
    });
}

colorChange("red", 1000)
.then((result) => {
    console.log(`Color has been changed to ${result}`);
    return colorChange("green", 1000);
})
.then((result) => {
    console.log(`Color has been changed to ${result}`);
    return colorChange("blue", 1000);
})
.then((result) => {
    console.log(`Color has been changed to ${result}`);
    return colorChange("orange", 1000);
})
.then((result) => {
    console.log(`Color has been changed to ${result}`);
    return colorChange("hotpink", 1000);
})
.then((result) => {
    console.log(`Color has been changed to ${result}`);
})
.catch((error) => {
    console.log("Promise was rejected");
});