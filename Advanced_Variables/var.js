//Never use var, first original way
//Acts strangely compared to other programming languages

//var variable is available outside the scope
//var does hoisting (placed at the top of the file like functions)

var variable1 = 1
console.log(variable1)

{
    let a = 1
    console.log(a)
    var b = 2
}

//You can redifine/override a var variable
var b =3
console.log(b)

