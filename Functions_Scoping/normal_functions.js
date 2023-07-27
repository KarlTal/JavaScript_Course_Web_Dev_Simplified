//Function with no parameters

function sayHi() {
  // function description
  console.log("Hello");
}

sayHi();

//Create a function that takes no arguments and prints your name

function sayMyname() {
  console.log("Karl");
}

sayMyname();

//Function with parameters
function sum(numberOne, numberTwo) {
  console.log(numberOne + numberTwo);
}

sum(1, 2);

let x = 2;
let y = 3;

sum(x, y);

/*Create a function that takes one argument ( a person's name)
and prints it out.
*/
function printName(personName) {
  console.log("You can do it " + personName + "!");
}

printName("Karl");
printName(); //Parameter defaults to undefined

//Returning a value
function sum(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

let result = sum(10, 5);
console.log(result);

//Create a function one argument (name), it will return that name added to the end of the string "Hello"

function helloName(personName) {
  return "Hello " + personName;
}

let nameOne = helloName("Karl");
console.log(nameOne);
