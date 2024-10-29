// for(let i = 1; i<=10; i++) {
//     console.log(i);
// }

// for(let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// Odd Number between 1-15
// for(let i = 1; i <= 15; i++) {
//     if(i % 2 !== 0) {
//         console.log("Odd Numbers: ",i);
//     }
// }

// for(let i = 15; i >= 1; i--) {
//     if(i % 2 !== 0) {
//         console.log("Reverse Odd Numbers: ",i);
//     }
// }


// Even Numbers between 2-10

// for(let i = 2; i <= 10; i += 2) {
//     console.log("Even Numbers: ",i);
// }

// for(let i = 10; i >= 2; i -= 2) {
//     console.log("Reverse Even Numbers: ",i);
// }


// let n = Number(prompt("Enter you number"));
// for(let i = 1; i <= 10; i++) {
//     console.log(`${n} X ${i} = ${n*i}`);
// }


for(let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for(let j = 1; j <= 3; j++) {
        console.log(j);
    }
}