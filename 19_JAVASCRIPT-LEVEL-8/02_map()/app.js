let num = [1, 2, 3, 4, 5];

let double = num.map((element) => {
    return element * 2;
});
console.log(double);

let students = [
    {
        name: "Aditya",
        age: 19,
        marks: 95,
    },
    {
        name: "Yash",
        age: 25,
        marks: 96
    },
    {
        name: "Rohan",
        age: 30,
        marks: 94.4
    }
];

let gpa = students.map((element) => {
    return (((element.marks) / 10)).toFixed(1);
});
console.log(gpa);