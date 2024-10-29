// async function greet() {
//     // throw "Weak Connection";
//     return "Hello";
// }

// greet()
// .then((result) => {
//     console.log("Promise is resolved:", result);
// })
// .catch((error) => {
//     console.log("Promise is rejected:", error);
// });


// let demo = async () => {
//     // throw 5;
//     return 5;
// }

// demo()
// .then((result) => {
//     console.log("Promise is resolved:", result);
// })
// .catch((error) => {
//     console.log("Promise is rejected:", error);
// });



function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
}

demo();