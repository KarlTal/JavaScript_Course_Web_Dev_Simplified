//
const a = "1"
const b = "asdfasdf"
const c = 2
//NaN == Not a Number

console.log(parseInt(b))
console.log(parseInt(b) == NaN) //false as NaN is never equal to anything in JS
//Special method to check if a variable is NaN
console.log(isNaN(parseInt(b)))
console.log(isNaN(c))

console.log(parseInt(a))
