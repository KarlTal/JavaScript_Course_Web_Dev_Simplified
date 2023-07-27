function doStuff(a, b, name) {
  print(sum(a, b));
  print(sayHi(name));
}

function print(variable) {
  console.log(variable);
}

function sum(a, b) {
  return a + b;
}

function sayHi(name) {
  return "Hi " + name;
}

doStuff(1, 2, "Karl");

//Works backwards, first is the most inside function
//Click to go the line of code
