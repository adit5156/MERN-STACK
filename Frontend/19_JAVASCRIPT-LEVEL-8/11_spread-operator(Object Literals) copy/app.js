let data = {
    email: "ironman@gmail.com",
    password: "abcd"
}

let dataCopy = {...data};
console.log(dataCopy);

dataCopy.id = 123;
console.log(dataCopy);



let arr = [1, 2, 3, 4, 5];
let obj1 = {...arr};
console.log(obj1);


let str = "HelloWorld";
let obj2 = {...str};
console.log(obj2);