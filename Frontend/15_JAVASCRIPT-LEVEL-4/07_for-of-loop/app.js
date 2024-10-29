let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for(let fruit of fruits) {
    console.log(fruit);
}

for(let char of "ApnaCollege") {
    console.log(char);
}

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
 
for(let hero of heroes) {
    for(let hero1 of hero) {
        console.log(hero1);
    }
}