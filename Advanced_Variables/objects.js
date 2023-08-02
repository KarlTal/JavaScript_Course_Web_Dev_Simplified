//Collection of information
let name = "Karl";
const age = 21;
const favouriteNumber = 11;

//Relate variables to a person

//Need a key and value pair
//Key -> Property

let person = {
  name: "Karl",
  age: 21,
  favouriteNumber: 11,
};

//console is an object
console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.favouriteNumber);

console.log(console);

//Object with a function as a property

let personTwo = {
  name: "Earl",
  age: 21,
  favouriteNumber: 11,
  sayHi: function () {
    console.log("Hi");
  },
  sayBye() {
    console.log("Bye");
  },
};

personTwo.sayHi();
personTwo.sayBye();

//Function taking in a object as a parameter
let getName = (person) => {
  console.log("Your name is " + person.name);
};

function getAge(person) {
  console.log("You are " + person.age + " years old ");
}

getName(person);
getAge(person);

//Exercise
/* Create an object called car with the properties
1. Make
2. Model
3. isUsed
4. Add a function called makeNoise that logs out Vroom
*/

let car = {
  make: "Subaru",
  model: "1980",
  isUsed: true,
  makeNoise() {
    console.log("Vroom");
  },
};

car.makeNoise();

//Accessing different properties
//Brackets
//Only use when you have a variable
console.log(car.make);
console.log(car["make"]); //More difficult to read using bracket notation

//Nested objects and arrays
let personThree = {
  name: "Kyle",
  hobbies: ["Weight Lifting", "Programming"],
  address: {
    street: " 12345 Main St",
    city: "Somewhere",
  },
};

console.log(personThree.hobbies);
console.log(personThree.hobbies[0]);
console.log(personThree.address);
console.log(personThree.address.street);

//Exercise 2 -> Create an object called book with the following properties
/*
    1.Title - string
    2.Author - object with the properties name and age 
*/

let book = {
  title: "Klara and The Sun",
  author: {
    name: "Kazuo Ishiguro",
    age: 68,
  },
};

console.log(book.author.name + " " + book.author.age);
console.log(book.title);

//Modify book title
book.title = "Hi";
console.log(book.title);
