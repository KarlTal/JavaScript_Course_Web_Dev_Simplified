const a = 1
const b = "1"

//Always use 3 equal signs when doing comparisons
//Except when comparing null and undefined

const f = null
const g = undefined
console.log(f == g) //Use this
console.log(f === g ) //Will return false
console.log(a != null)

console.log(a == b) //JS doing type coercion, returns true even though they are not the same data type
console.log(a === b) //Checks value but does not perform type coercion
const c = 0
const d = false
console.log(c == d) //True but they are not the same

const e = "" //Seen as false

//Not equal
const h = 3
console.log(a !== h)
