let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

// console.log("Spliced Colors Array: ",colors.splice(0, 2));
// console.log("Original Array: ",colors);

// console.log("Spliced Colors Array: ",colors.splice(3));
// console.log("Original Array: ",colors);

// console.log("Spliced Colors Array: ",colors.splice(1,3));
// console.log("Original Array: ",colors);


let cars = ["audi", "bmw", "mercedes", "ferrari"];
console.log("Spliced Array: ",cars.splice(3));
console.log("Original Array: ", cars);

console.log("Spliced Array: ",cars.splice(0, 1));
console.log("Original Array: ", cars);

console.log("Spliced Array: ",cars.splice(0, 1, "lamborghini", "bentley"));
console.log("Original Array: ", cars);

console.log("Spliced Array: ",cars.splice(0, 0, "bmw"));
console.log("Original Array: ", cars);

console.log("Spliced Array: ",cars.splice(1, 0, "jaguar"));
console.log("Original Array: ", cars);

console.log("Spliced Array: ",cars.splice(4, 1, "G-Wagon"));
console.log("Original Array: ", cars);