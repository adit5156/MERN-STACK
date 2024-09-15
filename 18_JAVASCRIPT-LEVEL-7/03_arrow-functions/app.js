const sum = (a, b) => {
  console.log(a + b);
};

sum(10, 11);

const cube = (n) => {
  return n ** 3;
};
let result = cube(4);
console.log(result);

const pow = (a, b) => {
  return Math.pow(a, b);
};
result = pow(3, 4);
console.log(result);

const hello = () => {
    console.log("Hello World!");
}
hello();