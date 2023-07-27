function printVariable(variable) {
  console.log(variable);
}

printVariable("Hi");

console.log(printVariable); //Variable with the definition of the function

//
function func(x) {
  console.log("before");
  x("hello world");
  console.log("after");
}

func(printVariable); //Maps function variable x

//
function sumCallback(a, b, callback) {
  callback(a + b); //Takes 2 numbers and a function and is called with the result of the addition
}

function handleSum(sum) {
  console.log(sum);
}

sumCallback(1, 2, handleSum);

// Create a new function that takes two parameters.
// 1. name
// 2. callback that prints out what we pass to it (printVariable)
// 3. Take name and append "Hello" to the beginning of the name
// If i pass in "Karl" it will print "Hello Karl"

function printVariableTwo(variable) {
  console.log("Hello " + variable);
}

function printName(personName, callback) {
  callback(personName);
}

printName("Karl", printVariableTwo);

/*
Using anonymous functions

printName("Karl", function (variable) {
    console.log("Hello" + variable)
})
*/
