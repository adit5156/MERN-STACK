let array = [1, 2, 3, 4, 5];

array.forEach((element, index) => {
    console.log(index, element);
});

let students = [
    {
        name: 'Aditya',
        age: 19,
        marks: 95
    }, 
    {
        name: 'Yash',
        age: 25,
        marks: 96
    }, 
    {
        name: 'Rohan',
        age: 30,
        marks: 94.4
    }
];

students.forEach((element, index) => {
    console.log(index, element);
    console.log(element.age);
});