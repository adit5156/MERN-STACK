// async function greet() {
//     return "Hello World";
//     // throw "Weak Connection";
// }

// greet()
// .then((result) => {
//     console.log("Promise is resolved,", result);
// })
// .catch((error) => {
//     console.log("Promise is rejected,", error);
// });

// let demo = async () => {
//     return 5;
// }

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
// }

// demo();


// let h1 = document.querySelector("h1");

// function colorChange(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`Color has been changed to ${color}`);
//             resolve();
//         }, delay);
//     });
// }

// async function testColorChange() {
//     try {
//         await colorChange("red", 1000);
//         await colorChange("green", 1000);
//         await colorChange("blue", 1000);
//         await colorChange("orange", 1000);
//         await colorChange("hotpink", 1000);
//         await colorChange("yellow", 1000);
//         await colorChange("aqua", 1000);
//     }
//     catch(error) {
//         console.log(`Color has not been changed to ${error}`);
//     }
// }

// testColorChange();



// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             console.log(`Success: Data is saved i.e. ${data}`);
//             resolve();
//         }
//         else {
//             reject(data);
//         }
//     });
// }

// async function testSaveToDb() {
//     try {
//         await saveToDb("Apple India");
//         await saveToDb("HP India");
//         await saveToDb("Lenovo India");
//         await saveToDb("Dell India");
//         await saveToDb("Acer India");
//     }
//     catch(error) {
//         console.log(`Failure: Weak Connection. Data not saved i.e. ${error}`);
//     }
// }

// testSaveToDb();