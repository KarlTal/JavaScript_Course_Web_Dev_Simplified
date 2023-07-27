//Use arrow function for passing functions to other functions
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

//Arrow function define a variable
//1. Define parameters
//2. => Takes these parameters and run the code afterwards
let sumArrow = (a, b) => {
  return a + b;
};

/*
    IF function returns a value and is only one line
    let sumArrow = (a,b) => a + b
*/

console.log(sum(1, 2));
console.log(sumArrow(1, 2));

//Exercise

function printName(name) {
  console.log(name);
}

let printNameArrow = (name) => {
  console.log(name);
};

printNameArrow("Karl");

//2nd Exercise

function printHi(name) {
  return "Hi" + name;
}

let printHiArrow = (name) => "Hi " + name;
console.log(printHiArrow("Karl"));

//Function with no parameters

function hi() {
  console.log("hi");
}

let hiArrow = () => console.log("hi there");

hiArrow();

//Example:

function func(x, callback) {
  callback(x);
}

/*
func(10, function (variable) {
  console.log(variable);
});
*/

func(10, (variable) => console.log(variable));
