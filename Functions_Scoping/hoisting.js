console.log(sum(1, 2));

function sum(a, b) {
  return a + b;
}

//Function used before definition
//JS takes all the functions and pretends all the functions are moved to the top of the file
//Does not work with arrow functions
//Because they are defined as a variable -> never gets hoisted
let sumArrow = (a, b) => a + b;
console.log(sumArrow(1, 2));
