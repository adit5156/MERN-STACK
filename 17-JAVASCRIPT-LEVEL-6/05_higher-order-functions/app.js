function multipleGreetings(func, count) {
  for(let i = 1; i <= count; i++) {
    func();
  }
}

let greet = function() {
  console.log("Hello World");
}

multipleGreetings(greet, 10);
multipleGreetings(function() {
  console.log("Namaste Bharat");
}, 10);