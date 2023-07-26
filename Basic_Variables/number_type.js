//Number type variable
//Each variable has an associated type
//JavaScript all numbers are classified as of type number

let number = 1; //Integer
console.log(typeof number); // Outputs the type of the variable

let numberTwo = 2.3; //Floating point number
console.log(typeof numberTwo);

let int = 2;
let float = 2.3;

console.log(typeof int);
console.log(typeof float);

console.log(float + int);
console.log(float - int);
console.log(2 * 2);
console.log(1 / int);

console.log(1 + 2 * 3); //Follows BIDMAS normal operations

// 3 Separate variables
let a = 1;
let b = 2;
let c = 3;

console.log((a + b) / c);

// Weird rounding errors -> cannot do perfect math
let d = 1.2;
let e = 2.2;
console.log(d + e);
