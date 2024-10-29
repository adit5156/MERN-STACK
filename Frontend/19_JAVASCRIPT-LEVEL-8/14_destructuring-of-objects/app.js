const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd"
};

let {username: user, password: pass, city = "Kolkata"} = student;
console.log(user);
console.log(pass);
console.log(city);

console.log(student);