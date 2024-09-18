let names = ['Ironman', 'Hulk', 'Thor', 'Captain America', 'abc', 'xyz', '123'];

// let winner = names[0];
// let firstRunnerUp = names[1];
// let secondRunnerUp = names[2];

let [winner, firstRunnerUp, secondRunnerUp, ...others] = names;

console.log(winner);            // Ironman
console.log(firstRunnerUp);     // Hulk
console.log(secondRunnerUp);    // Thor
console.log(others);            // ['Captain America', 'abc', 'xyz', '123'];