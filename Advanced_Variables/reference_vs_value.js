let a = 10;
let b = "hi";
let c = a; //Taking the value of a and placing it into c
c = c + 1;

let d = [1, 2]; //Allocate some memory and the address willbe stored at d
let e = d;
/*
    Variable    Value       Address     Value
    a           10          <0x01>      [1,2]
    b           'hi'
    c           10
    d           <0x01>
    e           <0x01>
*/

console.log(a);
console.log(c);
console.log(d);
//Changing value of e
d.push(3);
console.log(e);
console.log(d);

//----------------------------------------- Code --------------------------------------

let var1 = 10;
let var2 = "Hi";
let var3 = [1, 2]; //0x01
let var4 = var3; //0x01
let var5 = { name: "Karl" }; //0x02
let var6 = var5; //0x02

var5.name = "Joe";
console.log(var4);
var3.push(5);

var3.push(3); //Same address so both var3 and var4 will both be modified
console.log("var1 = " + var1);
console.log("var2 = " + var2);
console.log("var3 = " + var3);
console.log("var4 = " + var4);
console.log("var5 = " + JSON.stringify(var5.name)); //Convert object to a string version
console.log("var6 = " + JSON.stringify(var6.name));

const array = [1, 2]; //Can only change memory address with redefining with the equal sign
const arrayB = [1, 2];

array.push(3);
console.log(array == arrayB); //Returns false, as its comparing the value which in this case is the memory address
//Karl in hotel room 1
//Karl in hotel room 2 != to each other different person with the same name

//array = [1, 2, 3, 4]; Error

const arrayOne = [1, 2];
const elementToAdd = 3;

add(arrayOne, elementToAdd);

console.log(arrayOne);

//Hoisted to the top of the file
function add(array, element) {
  element = element + 100;
  array.push(element);
}

console.log(elementToAdd); //Didn't change value outside due to pass by value which is just 3 not a memory address

const arrayThree = arrayOne;
arrayThree.push(4);

console.log(arrayOne);
