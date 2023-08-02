//Convertion of information

/*
    number
    string
    boolean
    null 
    undefined
*/


let a = "1"

//Explicit type coercion
//Telling the computer to go from one type to another using the parseInt function
/*
    parseFloat
    parseInt
    var.toString()
*/
console.log(typeof parseInt(a))
console.log(a)
console.log(typeof a)

let b = 2
console.log(b.toString())

//Implicit type coercion
let c = 1
const d = "Hello"
//JS converting to the same type
//Convert c to a string using a plus symbol
console.log(c + d)