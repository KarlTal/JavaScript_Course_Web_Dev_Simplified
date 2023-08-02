function createUser(name, age) {
  return { name: name, age: age };
}

const user = createUser("Karl", 21);
console.log(user);

//Can also create objects using new keyword

const newDate = new Date(); //Constructor Date

console.log(newDate);

//Use capital letter when defining constructors of the object
function User(name, age) {
  this.name = name;
  this.age = age; //References the current object
} //constructor function

const user1 = new User("Faye", 20);
const userFunc = createUser("Kyle", 25);
//Main difference between is that using this and new tells what the objects represent
console.log(user1);
console.log(userFunc);

//Class format

class User1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName() {
    console.log(this.name);
  }
}

const user2 = new User1("Genralle", 21);
console.log(user2);
user2.printName();
