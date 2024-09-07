let msg = "help!";
console.log(msg.trim().toUpperCase());      // HELP!

let name = "ApnaCollege";
console.log(name.slice(4, 9));      // Colle
console.log(name.indexOf("na"));    // 2
console.log(name.replace("Apna", "Our"));   // OurCollege

let newName = name.slice(4).replace('l', 't');
console.log(newName);
console.log(newName.replace('l', 't'));